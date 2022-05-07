import React, { Children, cloneElement, useEffect, useRef } from 'react';
import { StyleSheet, ScrollView, View, Text, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { Theme } from '../../components/Styles/theme';

export type SwiperProps = {
  // 宽度
  width: number;
  // 当前页数
  current: number;
  // 指示器的类型
  indicatorMode?: 'round' | 'rect' | 'dot' | 'number' | 'none';
  // 指示器位置
  indicatorPosition?: 'topLeft' | 'topCenter' | 'topRight' | 'bottomCenter' | 'bottomLeft' | 'bottomRight';
  // 自动播放
  autoplay?: boolean;
  // 播放间隔
  interval?: number;
  // 播放持续时间
  duration?: number;
  // 是否衔接播放
  // circular?: boolean;
  // 圆角值
  borderRadius?: number;
  // 背景颜色
  backgroundColor?: string;
  // 变换时
  onChange: (index: number) => void;
};

let timer: NodeJS.Timeout | null = null;
let autoplayTimer: NodeJS.Timeout | null = null;
const Swiper: React.FC<SwiperProps> = props => {
  const {
    children,
    width,
    current = 0,
    indicatorMode = 'round',
    indicatorPosition = 'bottomCenter',
    autoplay = false,
    interval = 2500,
    // duration = 500,
    // circular = true,
    borderRadius = 8,
    backgroundColor,
    onChange,
  } = props;
  const swiperItemNumber = [].concat(children as any).length;
  const $scroll = useRef<ScrollView | null>(null);

  useEffect(() => {
    if (!autoplay) {
      autoplayTimer && clearInterval(autoplayTimer);
    } else {
      autoplayTimer = setInterval(() => {
        let index = current + 1;
        if (index >= swiperItemNumber) {
          index = 0;
        }
        $scroll?.current &&
          $scroll.current.scrollTo({
            x: index * width,
            animated: true,
          });
        onChange && onChange(index);
      }, interval);
    }

    return () => {
      autoplayTimer && clearInterval(autoplayTimer);
    };
  }, [autoplay, interval, current]);

  const getPanes = () => {
    const newChildren: any[] = [];
    Children.map(children, (child: any, idx) => {
      newChildren.push(
        cloneElement(child, {
          key: idx,
          width,
          borderRadius,
        }),
      );
    });

    return newChildren;
  };

  const renderIndicator = () => {
    const top = ['topLeft', 'topCenter', 'topRight'].includes(indicatorPosition);
    const left = ['topLeft', 'bottomLeft'].includes(indicatorPosition);
    const center = ['topCenter', 'bottomCenter'].includes(indicatorPosition);
    const right = ['topRight', 'bottomRight'].includes(indicatorPosition);

    const isNumber = indicatorMode === 'number';
    const isRound = indicatorMode === 'round';
    const isRect = indicatorMode === 'rect';
    const isDot = indicatorMode === 'dot';

    if (indicatorMode === 'none') return null;

    return (
      <View
        style={[
          styles.indicatorWrap,
          top ? styles.wrapTop : styles.wrapBottom,
          left && styles.wrapLeft,
          center && styles.wrapCenter,
          right && styles.wrapRight,
        ]}
      >
        {isNumber && (
          <View style={[styles.indicator, styles.indicatorNumber]}>
            <Text style={styles.indicatorNumberText}>
              {current + 1}/{swiperItemNumber}
            </Text>
          </View>
        )}
        {(isRound || isRect || isDot) && (
          <View style={[styles.indicator]}>
            {new Array(swiperItemNumber).fill(1).map((_, index) => {
              return (
                <View
                  key={index}
                  style={[
                    styles.indicatorItem,
                    index === current && styles.active,
                    isDot && styles.indicatorItemDot,
                    isRect && styles.indicatorItemRect,
                  ]}
                />
              );
            })}
          </View>
        )}
      </View>
    );
  };

  const onScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    event.persist();
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      const { contentOffset, layoutMeasurement } = event.nativeEvent;
      const { x } = contentOffset;
      const { width } = layoutMeasurement;
      const index = Math.round(x / width);
      onChange && onChange(index);
    }, 20);
  };

  return (
    <View style={{ width }}>
      <ScrollView
        horizontal
        pagingEnabled
        alwaysBounceHorizontal
        ref={$scroll}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEnd}
        style={{
          width,
          borderRadius,
          backgroundColor,
        }}
      >
        {getPanes()}
      </ScrollView>

      {renderIndicator()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  indicatorWrap: {
    position: 'absolute',
    left: '10%',
    right: '10%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapTop: {
    top: '10%',
  },
  wrapBottom: {
    bottom: '10%',
  },
  wrapLeft: {
    justifyContent: 'flex-start',
  },
  wrapCenter: {
    justifyContent: 'center',
  },
  wrapRight: {
    justifyContent: 'flex-end',
  },
  indicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  indicatorItem: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Theme.fillMask,
    marginLeft: 6,
  },
  active: {
    width: 16,
    backgroundColor: Theme.fillBase,
  },
  indicatorNumber: {
    backgroundColor: Theme.fillMask,
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 10,
  },
  indicatorNumberText: {
    color: Theme.colorTextBaseInverse,
    fontSize: 12,
  },
  indicatorItemRect: {
    width: 16,
    height: 4,
    borderRadius: 0,
  },
  indicatorItemDot: {
    width: 8,
  },
});

export default Swiper;
