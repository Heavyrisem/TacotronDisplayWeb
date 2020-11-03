import './App.css';
import Youtubeimg from './youtube.png';
import Pythoncode from './pythoncode.png';
import Running from './running.png';
import Failgraph from './failGraph.png';
import React, { Component } from 'react';

export default class App extends Component {
  componentDidMount() {
    this.autoscroll = setTimeout(this.scrollNext, 2000);
    document.getElementById('introduce').addEventListener('scroll', () => {
      console.log("scroll");
      if (this.autoscroll) clearTimeout(this.autoscroll);
      this.autoscroll = setTimeout(this.scrollNext, 8000);
    })
  }

  scrollNext() {
    let a = document.getElementById('introduce');
    console.log(a.scrollTop);
    if (a.scrollTop == a.scrollHeight - window.innerHeight)
      a.scrollTo({top: 0, behavior: 'smooth'});
    else
      a.scrollTo({top: a.scrollTop+parseInt(a.scrollHeight*10/100), behavior: 'smooth'});
  }

  render() {
    return (
      <div className="App">
        
      
        <div className="introduce" id="introduce">
        
          <div className="scrollarea">
            <div className="title">타코트론 음성 합성 프로젝트</div>
            <div className="my_name">표인수</div>
          </div>
  
          <div className="scrollarea">
            <div className="tacoWhat up" style={{fontSize: '2rem'}}>타코트론은 <span className="H">딥러닝 기반 음성 학습 모델</span>의 대표적인 모델입니다.</div>
          </div>
  
          <div className="scrollarea">
            <div className="tacoWhat title up">딥러닝?</div>
            <div className="tacoWhat desc">딥러닝은 사람의 뇌에 있는 뉴런들을 본따 만든 인공 신경망을 활용하여 사람의 사고방식을 컴퓨터에게 가르치는 것입니다.</div>
          </div>
  
          <div className="scrollarea">
            <div className="tacoWhat title up">음성 합성?</div><br />
            <div className="tacoWhat desc">우리가 일상생활에서 많이 접하는 <span className="H">시리, 빅스비, 네이버의 클로바</span> 같은 기계가 내는 음성들은 대부분 음성 합성으로 이루어져 있습니다.</div>
          </div>
          
          <div className="scrollarea">
            <div className="title">타코트론 딥러닝 과정</div>
          </div>
  
          <div className="scrollarea">
            <div className="tacoWhat title">데이터 탐색</div>
            <div className="tacoWhat desc">이 프로젝트는 음성 합성 모델인 <span className="H">타코트론</span>을 사용해서 이재정 경기도교육감님의 목소리를 학습시키는게 목표였습니다.</div>
            <div className="tacoWhat desc">그러려면 먼저 컴퓨터가 학습 할 수 있도록 음성 데이터를 찾아야 했습니다.</div>
            <div className="tacoWhat desc">그래서 음성 데이터를 가장 쉽게 찾을 수 있는 유튜브에서 검색을 진행했고 2시간 가량의 음성 데이터를 얻을 수 있었습니다.</div>
            <img src={Youtubeimg}></img>
          </div>
  
          <div className="scrollarea">
            <div className="tacoWhat title up">음성 데이터 가공</div>
            <div className="desc">음성 데이터를 구했으니 필요한 부분만 데이터를 추출해야 합니다.</div>
            <div className="desc">음성 합성을 위해서는 1000개의 데이터가 필요했기 때문에 많은 인원들이 도움을 주었습니다.</div>
            <div className="desc">처음에 몇번 시행착오를 겪으며 어떻게 하면 더 빠르고 정확하게 데이터 전처리가 가능할까 생각하다 번거로운 작업을<br /> 대신 해주는 간단한 프로그램도 몇가지 만들었습니다.</div>
            <img src={Pythoncode}></img>
          </div>
  
          <div className="scrollarea">
            <div className="title">딥러닝</div>
            <div className="desc">데이터의 전처리가 모두 끝났으니 이제 학습을 시작할 차례입니다.</div>
            <div className="desc">구글에서 만든 <span className="H">tensorflow</span> 라이브러리를 활용하여 학습을 진행했습니다.</div>
            <img src={Running}></img>
          </div>
  
          <div className="scrollarea">
            <div className="title">문제 발생</div>
            <div className="desc">현재 3~4일정도 계속 학습을 시켰지만 아직 제대로된 결과물을 얻을수 없었습니다.</div>
            <div className="desc">학습 그래프가 노랑색, 초록색으로 뚜렷하게 나와야 하지만 흐릿하게 퍼진 상태로 진행이 없었습니다.</div>
            <img src={Failgraph}></img>
            <div className="desc">(잘못된 그래프)</div>
          </div>
  
          <div className="scrollarea">
            <div className="title">문제 분석 및 느낀점</div>
            <div className="desc">아마도 먼저 만들었던 데이터셋에 문제가 있는거 같았습니다.</div>
            <div className="desc">100,000번 이상 학습을 하게 되면 사람이 말하는 것처럼 결과가 나와야 정상이지만</div>
            <div className="desc">150,000번 가량 학습을 진행했지만 제대로 결과가 나오지 않았습니다.</div>
            <div className="desc">딥러닝에서의 데이터 양과 품질이 얼마나 중요한지 알았습니다.</div>
          </div>
  
          <div className="scrollarea">
            <div className="desc"><span className="H">도움 - 이다솔</span></div>
          </div>
        </div>
      </div>
  
    );
  }
}
