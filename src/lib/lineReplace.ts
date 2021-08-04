import capitalize from 'capitalize';
import { useAtomValue } from 'jotai/utils';
import { name } from '../stores';

const replace = (text: string) => {
  const nameAtom = useAtomValue(name);
  const sanitext = text.replaceAll('$[name]', `${capitalize(nameAtom)}`);

  return sanitext;
};

export { replace };
