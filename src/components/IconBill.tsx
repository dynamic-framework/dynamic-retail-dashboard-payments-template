import { DIcon } from '@dynamic-framework/ui-react';

const icons = {
  WATER: 'water',
  GAS: 'fire',
  MOBILE: 'phone',
  ELECTRIC: 'lightbulb',
  CABLE: 'tv',
  INTERNET: 'router',
} as const;

type IconName = keyof typeof icons;

type Props = {
  name: IconName;
};

export default function IconBill({ name }: Props) {
  return (
    <DIcon
      hasCircle
      icon={icons[name]}
      size="var(--bs-ref-spacer-6)"
      theme="info"
    />
  );
}
