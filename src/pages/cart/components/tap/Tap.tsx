import {useState} from 'react';
import {cn} from '@/shared/utils/cn';

type DeliveryTab = 'normal' | 'kurly';

type TabItem = {
  value: DeliveryTab;
  label: string;
  count: number;
};

type TapProps = {
  items: TabItem[];
  selectedTab?: DeliveryTab;
  defaultSelectedTab?: DeliveryTab;
  onChange?: (tab: DeliveryTab) => void;
};

const variantStyles = {
  base: 'flex-1 py-[1.2rem] text-center',
  selected: 'border-b-2 border-green-600 text-green-600',
  unselected: 'border-b-2 border-gray-500 text-gray-900',
};

export const Tap = ({
  items,
  selectedTab,
  defaultSelectedTab = 'normal',
  onChange,
}: TapProps) => {
  const [internalSelectedTab, setInternalSelectedTab] =
    useState<DeliveryTab>(defaultSelectedTab);
  const currentSelectedTab = selectedTab ?? internalSelectedTab;

  const handleTabClick = (tab: DeliveryTab) => {
    if (selectedTab === undefined) {
      setInternalSelectedTab(tab);
    }

    onChange?.(tab);
  };

  return (
    <div className='text-body-14b flex' role='tablist'>
      {items.map((item) => (
        <button
          key={item.value}
          className={cn(
            variantStyles.base,
            currentSelectedTab === item.value
              ? variantStyles.selected
              : variantStyles.unselected
          )}
          type='button'
          role='tab'
          aria-selected={currentSelectedTab === item.value}
          onClick={() => handleTabClick(item.value)}>
          {item.label} {item.count}
        </button>
      ))}
    </div>
  );
};
