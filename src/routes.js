import Fujifilm2020 from './pages/fujifilm-2020'
import KiaWorldwide2021 from './pages/kia-worldwide-2021'
import Laneige2019 from './pages/laneige-2019'
import Galleria2019 from './pages/galleria-2019'
import VyvydStudio2018 from './pages/vyvydstudio-2018'
import Board from './pages/board'

export default [
  { 
    id: 'kia-worldwide-2021',
    path: '/kia-worldwide-2021',
    name: '기아 KIA',
    title: '기아 브랜드 글로벌 쇼케이스',
    thumbnail: '/image/kia-worldwide-2021/cover-lg.jpg',
    publish: '프로젝트',
    desc: '기아의 환골탈태 브랜드 리론칭',
    Component: KiaWorldwide2021
  },
  { 
    id: 'fujifilm-2020',
    path: '/fujifilm-2020',
    name: '후지필름',
    title: '후지필름',
    thumbnail: '/image/fujifilm-2020/cover-lg.jpg',
    publish: '프로젝트',
    desc: '캔버스 엘리먼트를 처음 적용해 본 프로젝트.',
    Component: Fujifilm2020
  },
  {
    id: 'laneige-2019',
    path: '/laneige-2019',
    name: '라네즈',
    title: '라네즈 다국어 웹사이트',
    thumbnail: '/image/laneige-2019/cover-lg.png',
    publish: '프로젝트',
    desc: '3개국 언어로 구축된 아모레 퍼시픽의 글로벌 뷰티 웹사이트.',
    Component: Laneige2019
  },
  {
    id: 'galleria-2019',
    path: '/galleria-2019',
    name: 'Hanwha Galleria',
    title: '갤러리아 디지털 채널 통합',
    thumbnail: '/image/galleria-2019/main.png',
    video: '/video/galleria-2019/main.mp4',
    publish: '프로젝트',
    desc: '방대한 통합 사이트 그리고 첫 PL의 감동',
    Component: Galleria2019
  },
  { 
    id: 'vyvydstudio-2018',
    path: '/vyvydstudio-2018',
    name: 'VYVYD STUDIO',
    title: '비비드 스튜디오',
    thumbnail: '/image/vyvydstudio-2018/cover.png',
    video: '/video/vyvydstudio-2018/cover.mp4',
    publish: '프로젝트',
    desc: '밀레니얼 인싸들을 위한 코스메틱 브랜드.',
    Component: VyvydStudio2018
  },
  // {
  //   id: 'post',
  //   path: '/post',
  //   name: '샘플',
  //   title: '셈플',
  //   Component: Board,
  // }
]