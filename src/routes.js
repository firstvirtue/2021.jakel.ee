import Fujifilm2020 from './pages/fujifilm-2020'
import KiaWorldwide2021 from './pages/kia-worldwide-2021'
import Laneige2019 from './pages/laneige-2019'

export default [
  { 
    id: 'kia-worldwide-2021',
    path: '/kia-worldwide-2021',
    name: '기아 KIA',
    title: '기아 브랜드 쇼케이스',
    thumbnail: '/image/kia-worldwide/cover-lg.jpg',
    publish: '프로젝트',
    desc: '기아의 환골탈태 브랜드 리런칭',
    Component: KiaWorldwide2021
  },
  { 
    id: 'fujifilm-2020',
    path: '/fujifilm-2020',
    name: '후지필름',
    title: '후지필름',
    thumbnail: '/image/fujifilm/cover-lg.jpg',
    publish: '프로젝트',
    desc: '캔버스 엘리먼트를 적용해 본 것은 처음이었어..',
    Component: Fujifilm2020
  },
  { 
    id: 'laneige-2019',
    path: '/laneige-2019',
    name: '라네즈',
    title: '라네즈 다국어',
    thumbnail: '/image/laneige/cover-lg.png',
    publish: '프로젝트',
    desc: '3개국 언어 베리에이션(variation)을 구축한 글로벌 뷰티 웹사이트. 특히 중국은 어렵다.',
    Component: Laneige2019
  },
]