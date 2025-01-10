import { DIcon } from '@dynamic-framework/ui-react';

type Props = {
  name: string;
};

const icons = {
  WATER: 'water',
  GAS: 'fire',
  MOBILE: 'phone',
  ELECTRIC: 'lightbulb',
  CABLE: 'tv',
  INTERNET: 'router',
} as const;

export default function IconBill({ name }: Props) {
  return (
    <DIcon
      hasCircle
      icon={icons[name] as keyof typeof icons}
      size="var(--bs-ref-spacer-6)"
      theme="info"
    />
  );
}
