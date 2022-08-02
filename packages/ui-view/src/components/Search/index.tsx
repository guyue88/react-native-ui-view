import React, { PropsWithChildren, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, TextInputProps, StyleProp, ViewStyle } from 'react-native';
import { Theme } from '../Styles/theme';
import Icon from '../Icon';

export type SearchProps = {
  // 搜索值
  value: string;
  // 形状，默认圆角
  shape?: 'round' | 'square';
  // 文字对齐模式
  textAlign?: 'left' | 'center' | 'right';
  // icon 以及文字颜色
  color?: string;
  // 背景色
  backgroundColor?: string;
  // border color
  borderColor?: string;
  // placeholder
  placeholder?: string;
  // placeholder color
  placeholderColor?: string;
  // 显示清除按钮，默认显示
  showClear?: boolean;
  // 右侧搜索的文字，默认显示
  showSearchText?: boolean;
  // 显示搜索文字，默认”搜素“
  searchText?: string;
  // 搜索文字颜色
  searchTextColor?: string;
  // 输入框的其他参数
  textInputProps?: TextInputProps;
  // style
  style?: StyleProp<ViewStyle>;
  // value 变更回调
  onChange: (value: string) => void;
  // 搜索回调
  onSearch?: (value: string) => void;
  // 删除输入框文件的回调
  onClear?: () => void;
};

const Search: React.FC<PropsWithChildren<SearchProps>> = props => {
  const $input = useRef<TextInput>(null);
  const {
    value,
    shape = 'round',
    textAlign = 'left',
    color = Theme.colorTextParagraph,
    borderColor = Theme.colorIconBase,
    placeholder,
    placeholderColor = Theme.colorTextPlaceholder,
    backgroundColor = 'transparent',
    showClear = true,
    searchText = '搜索',
    searchTextColor = Theme.colorLink,
    showSearchText = true,
    textInputProps = {},
    style = {},
    onChange,
    onSearch,
    onClear,
  } = props;

  const onSearchText = () => {
    onSearch && onSearch(value);
  };

  const onClearText = () => {
    onChange('');
    onClear && onClear();
  };

  return (
    <View style={[styles.searchContainer, style]}>
      <View style={[styles.search, shape === 'round' && styles.round, { backgroundColor, borderColor }]}>
        <Icon name="search" size={22} color={placeholderColor} />
        <TextInput
          ref={$input}
          style={[styles.searchInput, { color }]}
          placeholder={placeholder}
          textAlign={textAlign}
          placeholderTextColor={placeholderColor}
          returnKeyType="search"
          blurOnSubmit={true}
          enablesReturnKeyAutomatically={true}
          multiline={false}
          {...textInputProps}
          value={value}
          onChangeText={onChange}
          onSubmitEditing={onSearchText}
        />
        {showClear && !!value && (
          <Icon name="close-circle" size={20} color={Theme.colorTextPlaceholder} onPress={onClearText} />
        )}
      </View>
      {showSearchText && (
        <View style={styles.searchTextWrap}>
          <Text
            style={[styles.searchText, { color: searchTextColor }]}
            onPress={() => {
              onSearchText();
              $input.current?.blur();
            }}
          >
            {searchText}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 4,
    paddingHorizontal: 6,
  },
  round: {
    borderRadius: 16,
  },
  searchInput: {
    flex: 1,
    padding: 0,
    marginLeft: 4,
    height: 30,
    fontSize: 14,
  },
  searchTextWrap: {
    marginLeft: 8,
  },
  searchText: {
    fontSize: 18,
  },
});

export default Search;
