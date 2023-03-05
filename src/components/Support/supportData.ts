import Support1 from '../../assets/img/support-1.png';
import Support2 from '../../assets/img/support-2.png';
import Support3 from '../../assets/img/support-3.png';
import Support4 from '../../assets/img/support-4.png';
import Support5 from '../../assets/img/support-5.png';
import Support6 from '../../assets/img/support-6.png';

export interface Support {
  headerTitle: string;
  number: string;
  mainTitle: string;
  description: string;
  src: string;
  isDiff?: boolean;
}

export const supportData: Support[] = [
  {
    headerTitle: '人材の確保がうまくいかない。',
    number: '01',
    mainTitle: '全国にご紹介可能なパートナー',
    description: 'トレーナー、マーケター、クリエイターなどの専門職パートナーが約〇〇名在籍中です。',
    src: Support1
  },
  {
    headerTitle: '集客方法がわからない。',
    number: '02',
    mainTitle: '集客の勝ちパターンを熟知したノウハウを提供',
    description: '圧倒的なリサーチ力やトレンド分析に基づいたソリューションのご提案をします',
    src: Support2,
    isDiff: true
  },
  {
    headerTitle: '空きスペースを有効的に活用 できていない。',
    number: '03',
    mainTitle: 'スペースの特性を活かしたリブランディング',
    description: 'エリア特性や人口属性に基づいた、最適な活用方法をご提案します。',
    src: Support3
  },
  {
    headerTitle: 'コロナ禍で低迷した経営の回復方法がわからない。',
    number: '04',
    mainTitle: '包括的なマーケティング手法で即効性のある施策を実行',
    description: 'あらゆるマーケティング手法から自社の現状の最適化した手法を導き、PDCAのサイクルを運用します。',
    src: Support4,
    isDiff: true
  },
  {
    headerTitle: '新規事業の始め方がわからない。',
    number: '05',
    mainTitle: '事業開発の上流工程からサポート',
    description: '事業開発に必要なブレストやコンセプト開発、事業計画など、上流の工程からコンサルティングを提供します。',
    src: Support5
  },
  {
    headerTitle: '明確なターゲットに アプローチできていない。',
    number: '06',
    mainTitle: 'ターゲット別に刺さるアプローチ手法の提案',
    description:
      'ターゲットごとに効果的なアプローチ手法は異なります。\n リサーチの上で、効果的なアプローチを導き出します。',
    src: Support6,
    isDiff: true
  }
];
