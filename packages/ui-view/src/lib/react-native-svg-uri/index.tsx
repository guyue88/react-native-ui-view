import React from 'react';
import { View, Image, ImageSourcePropType, ImageResolvedAssetSource, ViewStyle } from 'react-native';
import xmldom from 'xmldom';
import Svg, {
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Path,
  Polygon,
  Rect,
  Defs,
  Stop,
} from 'react-native-svg';
import { camelCaseNodeName, removePixelsFromNodeValue, transformStyle, getEnabledAttributes } from './utils';

type Props = {
  fill: string;
  width: number;
  height: number;
  svgXmlData: string;
  source?: ImageSourcePropType;
  style?: ViewStyle;
};

type State = {
  svgXmlData: string;
};

const { resolveAssetSource } = Image;

const ACCEPTED_SVG_ELEMENTS = [
  'svg',
  'g',
  'circle',
  'path',
  'rect',
  'linearGradient',
  'radialGradient',
  'stop',
  'ellipse',
  'polygon',
];

// Attributes from SVG elements that are mapped directly.
const SVG_ATTS = ['viewBox'];
const G_ATTS = ['id'];
const CIRCLE_ATTS = ['cx', 'cy', 'r', 'fill', 'stroke'];
const PATH_ATTS = ['d', 'fill', 'stroke'];
const RECT_ATTS = ['width', 'height', 'fill', 'stroke', 'x', 'y'];
const LINEARG_ATTS = ['id', 'x1', 'y1', 'x2', 'y2'];
const RADIALG_ATTS = ['id', 'cx', 'cy', 'r'];
const STOP_ATTS = ['offset'];
const ELLIPSE_ATTS = ['fill', 'cx', 'cy', 'rx', 'ry'];
const POLYGON_ATTS = ['points'];

let ind = 0;

export default class SvgUri extends React.Component<Props, State> {
  private isComponentMounted = false;
  constructor(props: Props) {
    super(props);

    this.state = { svgXmlData: props.svgXmlData };

    this.createSVGElement = this.createSVGElement.bind(this);
    this.obtainComponentAttrs = this.obtainComponentAttrs.bind(this);
    this.inspectNode = this.inspectNode.bind(this);
    this.fecthSVGData = this.fecthSVGData.bind(this);

    // Gets the image data from an URL or a static file
    if (props.source) {
      const source: ImageResolvedAssetSource = resolveAssetSource(props.source) || ({} as ImageResolvedAssetSource);
      this.fecthSVGData(source.uri);
    }
  }

  UNSAFE_componentWillMount() {
    this.isComponentMounted = true;
  }

  UNSAFE_componentWillUnmount() {
    this.isComponentMounted = false;
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    if (nextProps.source) {
      const source: ImageResolvedAssetSource = resolveAssetSource(nextProps.source) || ({} as ImageResolvedAssetSource);
      const oldSource: ImageResolvedAssetSource =
        resolveAssetSource(this.props.source as any) || ({} as ImageResolvedAssetSource);
      if (source.uri !== oldSource.uri) {
        this.fecthSVGData(source.uri);
      }
    }
  }

  async fecthSVGData(uri: string) {
    let responseXML = null;
    try {
      let response = await fetch(uri);
      responseXML = await response.text();
    } catch (e) {
      console.error('ERROR SVG', e);
    } finally {
      if (this.isComponentMounted) {
        this.setState({ svgXmlData: responseXML || '' });
      }
    }

    return responseXML;
  }

  createSVGElement(node: any, child: any) {
    let componentAttrs: any = {};
    let i = ind++;
    switch (node.nodeName) {
      case 'svg':
        componentAttrs = this.obtainComponentAttrs(node, SVG_ATTS);
        if (this.props.width) componentAttrs.width = this.props.width;
        if (this.props.height) componentAttrs.height = this.props.height;

        return (
          <Svg key={i} {...componentAttrs}>
            {child}
          </Svg>
        );
      case 'g':
        componentAttrs = this.obtainComponentAttrs(node, G_ATTS);
        return (
          <G key={i} {...componentAttrs}>
            {child}
          </G>
        );
      case 'path':
        componentAttrs = this.obtainComponentAttrs(node, PATH_ATTS);
        return (
          <Path key={i} {...componentAttrs}>
            {child}
          </Path>
        );
      case 'circle':
        componentAttrs = this.obtainComponentAttrs(node, CIRCLE_ATTS);
        return (
          <Circle key={i} {...componentAttrs}>
            {child}
          </Circle>
        );
      case 'rect':
        componentAttrs = this.obtainComponentAttrs(node, RECT_ATTS);
        return (
          <Rect key={i} {...componentAttrs}>
            {child}
          </Rect>
        );
      case 'linearGradient':
        componentAttrs = this.obtainComponentAttrs(node, LINEARG_ATTS);
        return (
          <Defs key={i}>
            <LinearGradient {...componentAttrs}>{child}</LinearGradient>
          </Defs>
        );
      case 'radialGradient':
        componentAttrs = this.obtainComponentAttrs(node, RADIALG_ATTS);
        return (
          <Defs key={i}>
            <RadialGradient {...componentAttrs}>{child}</RadialGradient>
          </Defs>
        );
      case 'stop':
        componentAttrs = this.obtainComponentAttrs(node, STOP_ATTS);
        return (
          <Stop key={i} {...componentAttrs}>
            {child}
          </Stop>
        );
      case 'ellipse':
        componentAttrs = this.obtainComponentAttrs(node, ELLIPSE_ATTS);
        return (
          <Ellipse key={i} {...componentAttrs}>
            {child}
          </Ellipse>
        );
      case 'polygon':
        componentAttrs = this.obtainComponentAttrs(node, POLYGON_ATTS);
        return (
          <Polygon key={i} {...componentAttrs}>
            {child}
          </Polygon>
        );
      default:
        return null;
    }
  }

  obtainComponentAttrs({ attributes }: any, enabledAttributes: any) {
    let styleAttrs = {};
    Array.from(attributes).forEach(({ nodeName, nodeValue }: any) => {
      Object.assign(styleAttrs, transformStyle(nodeName, nodeValue, this.props.fill));
    });

    let componentAttrs = Array.from(attributes)
      // @ts-ignore
      .map(camelCaseNodeName)
      .map(removePixelsFromNodeValue)
      .filter(getEnabledAttributes(enabledAttributes))
      .reduce(
        (acc, { nodeName, nodeValue }) => ({
          ...acc,
          [nodeName]: this.props.fill && nodeName === 'fill' ? this.props.fill : nodeValue,
        }),
        {},
      );
    Object.assign(componentAttrs, styleAttrs);

    return componentAttrs;
  }

  inspectNode(node: any) {
    //Process the xml node
    let arrayElements = [];

    // Only process accepted elements
    if (!ACCEPTED_SVG_ELEMENTS.includes(node.nodeName)) return null;
    // if have children process them.

    // Recursive function.
    if (node.childNodes && node.childNodes.length > 0) {
      for (let i = 0; i < node.childNodes.length; i++) {
        let temp = this.inspectNode(node.childNodes[i]);
        if (temp != null) arrayElements.push(temp);
      }
    }
    let element = this.createSVGElement(node, arrayElements);
    return element;
  }

  render() {
    try {
      if (this.state.svgXmlData == null) return null;

      let inputSVG = this.state.svgXmlData.substring(
        this.state.svgXmlData.indexOf('<svg '),
        this.state.svgXmlData.indexOf('</svg>') + 6,
      );

      let doc = new xmldom.DOMParser().parseFromString(inputSVG);

      let rootSVG = this.inspectNode(doc.childNodes[0]);

      return <View style={this.props.style}>{rootSVG}</View>;
    } catch (e) {
      console.error('ERROR SVG', e);
      return null;
    }
  }
}
