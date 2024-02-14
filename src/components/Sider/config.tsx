import Icon, { CalendarTwoTone, HeartFilled, IdcardOutlined, TrophyFilled } from '@ant-design/icons';
import { Exit } from '../../icons';

const items = [
    {
        label: 'Календарь',
        key: '1',
        icon: <CalendarTwoTone twoToneColor="#061178"/>,
    },
    {
        label: 'Тренировки',
        key: '2',
        icon: <HeartFilled />,
    },
    {
        label: 'Достижения',
        key: '3',
        icon: <TrophyFilled />,
    },
    {
        label: 'Профиль',
        key: '4',
        icon: <IdcardOutlined />,
    },
    {
        label: 'Выход',
        key: '5',
        icon: <Icon component={Exit}/>,
    },
];

export const getMenuItems = (itemIds: string[]) => {
    return items.filter((item) => item?.key && itemIds.includes(item.key));
};
