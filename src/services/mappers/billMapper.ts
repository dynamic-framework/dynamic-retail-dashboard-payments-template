import type { ApiBill } from '../api-interface';

export default function billMapper(apiBill: ApiBill) {
  return { ...apiBill };
}
