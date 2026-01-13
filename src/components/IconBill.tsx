import { DIcon } from '@dynamic-framework/ui-react';

type Props = {
  name: string;
};

export default function IconBill({ name }: Props) {
  return (
    <DIcon
      hasCircle
      icon={name}
      size="1rem"
      color="info"
    />
  );
}
