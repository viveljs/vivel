import * as React from 'react';
import { ScriptProps } from '../types';
import { Button } from '../components/atoms';
import { Name } from './components';

const Introduction: ScriptProps = {
  bgm: 'piano',
  background: 'office',
  dialogues: [
    {
      characters: ['Putri'],
      mood: ['normal1'],
      background: 'office',
      lines: [
        'Wah, ada pemain baru, ayo sini ngobrol dulu~ Coba klik tombol next di kanan atas kotak dialog untuk melanjutkan.',
      ],
      response: 'Ini kan ?',
    },
    {
      characters: ['Putri'],
      mood: ['approved'],
      background: 'office',
      lines: [
        'Yes, gampang banget kan! Halo, namaku Putri. Agar aku bisa tahu namamu, silahkan klik kotak isian di atas, ketik nama panggilanmu, lalu klik tombol next ya!',
      ],
      option: <Name />,
    },
    {
      characters: ['Putri'],
      mood: ['normal1'],
      background: 'office',
      lines: ['Hai $[name], selamat datang di Prasmul Quest!'],
    },
    {
      characters: ['Putri'],
      mood: ['satisfied'],
      background: 'office',
      lines: ['Pasti kamu sudah sangat tidak sabar untuk bermain.'],
    },
    {
      characters: ['Putri'],
      mood: ['approved'],
      background: 'office',
      lines: [
        'Namun lebih baik kita ikuti dulu tutorial ini, biar nanti mainnya lebih lancar!',
      ],
      option: <Button text="Siap!!" scene="pilgan" />,
    },
  ],
};
export { Introduction };
