import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Picker from '.';

export type DatePickerProps = {
  // 是否可见
  visible: boolean;
  // 显示的年份区间
  yearRange: number[];
  // 初始选定日期，时间戳
  initialDate: number;
  // 关闭弹层
  onClose?: () => void;
  // 选定回调，参数为选定时间的时间戳
  onConfirm?: (timestamp: number) => void;
};

const MONTH_LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const DatePicker: React.FC<DatePickerProps> = props => {
  const { visible = false, yearRange, initialDate, onClose, onConfirm } = props;
  const [startYear, endYear] = yearRange;

  const [yearList, setYearList] = useState<number[]>([]);
  const [monthList, setMonthList] = useState<number[]>([]);
  const [dayList, setDayList] = useState<number[]>([]);
  const [selectedIndex, setSelectIndex] = useState([0, 0, 0]);

  useEffect(() => {
    const yl = [];
    for (let i = startYear; i <= endYear; i++) {
      yl.push(i);
    }

    const date = dayjs(initialDate);
    const year = date.year();
    const month = date.month() + 1;
    const day = date.date();

    const dl = getDayRange(year, month);
    setYearList(yl);
    setMonthList(MONTH_LIST);
    setDayList(dl);

    setSelectIndex([
      yl.findIndex(i => i === year),
      MONTH_LIST.findIndex(i => i === month),
      dl.findIndex(i => i === day),
    ]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDayRange = (year: number, month: number) => {
    const date = dayjs(`${year}/${month}/01`).endOf('M').date();
    const dl = [];
    for (let i = 1; i <= date; i++) {
      dl.push(i);
    }
    return dl;
  };

  return (
    <Picker
      closeOnClickOverlay
      visible={visible}
      barStyle="light-content"
      dataSource={[
        yearList.map(i => `${i}年`),
        monthList.map(i => (i < 10 ? `0${i}月` : `${i}月`)),
        dayList.map(i => (i < 10 ? `0${i}日` : `${i}日`)),
      ]}
      selectedIndex={selectedIndex}
      onClose={onClose}
      onChange={([yi, mi, di]) => {
        const [y, m] = selectedIndex;
        let nd = di;

        // 改变年月才修改日期天数
        if (yi !== y || mi !== m) {
          const range = getDayRange(yearList[yi], monthList[mi]);
          if (range.length !== dayList.length) {
            setDayList(range);
            // 只有当月无该日期才修改
            if (nd >= range.length) {
              nd = 0;
            }
          }
        }
        setSelectIndex([yi, mi, nd]);
      }}
      onConfirm={([yi, mi, di]) => {
        onConfirm && onConfirm(dayjs(`${yearList[yi]}/${monthList[mi]}/${dayList[di]}`).valueOf());
      }}
    />
  );
};

export default DatePicker;
