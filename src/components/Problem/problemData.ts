import Problem1 from '../../assets/img/problem-1.svg';
import Problem2 from '../../assets/img/problem-2.svg';
import Problem3 from '../../assets/img/problem-3.svg';
import Problem4 from '../../assets/img/problem-4.svg';
import Problem5 from '../../assets/img/problem-5.svg';
import Problem6 from '../../assets/img/problem-6.svg';

export interface Problem {
  src: string;
  description: string | JSX.Element;
}

export const problemData: Problem[] = [
  {
    src: Problem1,
    description: '人材の確保がうまくいかない。'
  },
  {
    src: Problem2,
    description: '集客方法がわからない'
  },
  {
    src: Problem3,
    description: '空きスペースを有効的に \n 活用できていない。'
  },
  {
    src: Problem4,
    description: 'コロナ禍で低迷した経営の \n 回復方法がわからない。'
  },
  {
    src: Problem5,
    description: '新規事業の始め方が \n わからない。'
  },
  {
    src: Problem6,
    description: '明確なターゲット \n アプローチできていない。'
  }
];
