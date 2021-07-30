import React, { LegacyRef, MutableRefObject, useRef, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TextInputProps } from 'react-native';
import { Theme } from '../Styles/theme';
import Icon from '../Icon';

export type SearchProps = {
  // 形状
  shape?: 'round' | 'square';
  // 文字对齐模式
  textAlign?: 'left' | 'center' | 'right';
  // placeholder
  placeholder?: string;
  // 显示清除按钮，默认显示
  showClear?: boolean;
  // 显示搜索文字，默认”搜素“
  searchText?: string;
  // 右侧搜索的文字，默认显示
  showSearchText?: boolean;
  // 输入框的其他参数
  textInputProps?: TextInputProps;
  // 搜索回调
  onSearch?: (value: string) => void;
  // 删除输入框文件的回调
  onClear?: () => void;
};

const Search: React.FC<SearchProps> = props => {
  const [value, setValue] = useState('');
  const $input = useRef<TextInput>(null);
  const {
    shape = 'round',
    textAlign = 'left',
    placeholder,
    showClear = true,
    searchText = '搜索',
    showSearchText = true,
    textInputProps = {},
    onSearch,
    onClear,
  } = props;

  const onSearchText = () => {
    console.log(value);
    onSearch && onSearch(value);
  };

  const onClearText = () => {
    setValue('');
    onClear && onClear();
  };

  return (
    <View style={styles.searchContainer}>
      <View style={[styles.search, shape === 'round' && styles.round]}>
        <Icon name="search" size={22} color={Theme.colorTextPlaceholder} />
        <TextInput
          ref={$input}
          style={styles.searchInput}
          placeholder={placeholder}
          textAlign={textAlign}
          placeholderTextColor={Theme.colorTextPlaceholder}
          returnKeyType="search"
          blurOnSubmit={true}
          enablesReturnKeyAutomatically={true}
          multiline={false}
          {...textInputProps}
          value={value}
          onChangeText={setValue}
          onSubmitEditing={onSearchText}
        />
        {showClear && !!value && (
          <Icon name="close-circle" size={20} color={Theme.colorTextPlaceholder} onPress={onClearText} />
        )}
      </View>
      {showSearchText && (
        <View style={styles.searchTextWrap}>
          <Text
            style={styles.searchText}
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
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Theme.colorIconBase,
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
    height: 32,
    fontSize: 14,
    color: Theme.colorTextParagraph,
  },
  searchTextWrap: {
    marginLeft: 8,
  },
  searchText: {
    fontSize: 18,
    color: Theme.colorLink,
  },
});

export default Search;
