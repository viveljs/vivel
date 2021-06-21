import { writeFile } from 'fs';
import fg from 'fast-glob';

const args = process.argv.slice(2);

const files = async (args: string[]) => {
  const entries = await fg(
    args.map((x) => {
      return `${x}/**`;
    }),
    {
      onlyFiles: true,
      deep: 2,
      objectMode: true,
      ignore: ['**/index.*'],
    }
  );
  return entries;
};

const indexGenerator = async () => {
  const array = await files(args);
  writeFile(
    `${args}/index.ne`,
    array
      .map((x) => {
        return `@include "${x.name}"`;
      })
      .join('\n'),
    function (err) {
      console.log(err ? 'Error :' + err : 'Done');
    }
  );
};

indexGenerator();

export default indexGenerator;
