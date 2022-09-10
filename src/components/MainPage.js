import React from 'react'
import profileImage from '../Images/profile.jpg'
import github from '../Images/icons/github.png'
import qiita from '../Images/icons/qiita.jpg'
import './MainPage.css'

const MainPage = () => {
  return (
    <div className='main-page' id = 'profile'>
      <div className='profile_box'>
        <div className='box-title'>プロフィール</div>
        <div className='profile_center'>
          <img src={profileImage} className="profile_img"  />
          <div className='profile_name'>
            <h2>原田　崇伸</h2>
            <p>静岡大学　情報学部　3年(2022年8月時点)。
              現在はプログラミング(Javascript,Typescript, Python, PHP, Java)や機械学習(主に強化学習)、英語の勉強をしています。
              運動しなきゃ！と思いながら生きています。
            </p>
            <h2>SNS等</h2>
            <ul className='sns_links'>
              <li className='sns_link'>
                <a href='https://github.com/Takkar-915' target='_blank'>
                      <img src={(github)} className='sns_img'  />
                </a>
              </li>
              <li className='sns_link'>
                    <a href='https://qiita.com/takkar-915' target='_blank'>
                      <img src={(qiita)} className='sns_img'  />
                    </a>
              </li> 
            </ul> 
        </div> 
        </div>
        
      </div>

    <div className='carrer-and-certification' id = 'career'>
    <div className='box-title'>経歴/資格</div>
    </div>
    <div className='flex'>
    <div className='career'>
    <div className='little-title'>経歴等</div>
    <ul>
      <li>2020年3月　都立小金井北高校卒業</li>
      <li>2020年4月　静岡大学情報学部入学</li>
      <li>2022年8月　1週間のインターンシップに参加。PythonとKotlinでのAndroidアプリ開発を体験</li>
      <li>2022年9月　1週間のインターンシップに参加。シミュレータ環境で自動運転の制御ロジックを実装</li>
      <li>2024年3月　静岡大学情報学部卒業見込み</li>
    </ul>

    </div>
    <div className='certification'>
    <div className='little-title'>資格等(取得済)</div>
    <ul>
      <li>2022年5月　TOEIC L&R 850点 (Listening 435+Reading 415、2022年5月 公開テスト) </li>
      <li>2021年6月　実用英語技能検定　準1級取得</li>
      <li>2021年8月　普通自動車第一種免許(AT限定)</li>
    </ul>
  </div>
    <div className='certification'>
    <div className='little-title'>勉強中</div>
    <ul>
      <li>2022年10月　基本情報技術者試験 受験予定</li>
      <li>2023年1月　実用英語技能検定　1級受験予定(CSE SCORE 2700over(筆記2050,面接650))</li>
      <li>????年??月　国連英検A級受験予定(在学中)</li>
    </ul>
    </div>
    </div>

    <div className='skills' id = 'skills'>
    <div className='box-title'>スキル</div>
    <div className='works_list'>
      <div className='card card-skin'>
        <div className='card__textbox'>
        <div className='card__titletext'>
        大学講義
        </div>
        <div className='card__overviewtext'>
        <p>基本的な文法やアルゴリズム、データ構造等を勉強しました。</p>
        <p>Java, Python, PHP</p>
        </div>
        </div>
        </div>
    
      
      <div className='card card-skin'>
        <div className="card__textbox">
        <div className="card__titletext">
        個人開発
        </div>
        <div class="card__overviewtext">
        <p>授業外で勉強した言語、FWです。</p>
        <p>フロントエンド：Javascript,Typescript,React</p>
        <p>バックエンド：Python, PHP, Django, Laravel</p>
        </div>
        </div>
      </div>
      <div className="card card-skin">
        <div className="card__textbox">
        <div className="card__titletext">
        インターンシップ等
        </div>
        <div className="card__overviewtext">
        <p>インターンシップで使用した言語です</p>
        <p>Python, Kotilin</p>
        </div>
        </div>
      </div>
      <div className="card card-skin">
        <div className="card__textbox">
        <div className="card__titletext">
        その他
        </div>
        <div className="card__overviewtext">
        <p>使用経験のあるツール等</p>
        <p>Git, AWS, Slack, Microsoft Teams</p>
        </div>
        </div>
      </div>
      </div>
      </div>
    
    <div className='works' id = 'works'>

    <div className='box-title'>開発物</div>

      <div className='works_list'>
      <div className='card card-skin'>
        <div className='card__imgframe'></div>
        <div className='card__textbox'>
        <div className='card__titletext'>
        本ポートフォリオサイト
        </div>
        <div className='card__overviewtext'>
        Reactを使用し、本ポートフォリオサイトを作成
        </div>
        </div>
        </div>
    
      
      <div className='card card-skin'>
        <div className="card__imgframe"></div>
        <div className="card__textbox">
        <div className="card__titletext">
        クレジットカード明細分析ツール
        </div>
        <div class="card__overviewtext">
        Pythonでcsv形式の楽天クレジットカード明細を分析するツールを作成
        </div>
        </div>
      </div>
      <div className="card card-skin">
        <div className="card__imgframe"></div>
        <div className="card__textbox">
        <div className="card__titletext">
        オリジナル英単語帳作成アプリ
        </div>
        <div className="card__overviewtext">
        Djangoを使い、自分専用の単語帳を作れるアプリを作成
        </div>
        </div>
      </div>

      <div className="card card-skin">
        <div className="card__imgframe"></div>
        <div className="card__textbox">
        <div className="card__titletext">
        画像分析Androidアプリ
        </div>
        <div className="card__overviewtext">
        PythonとKotlinを用い、撮影した野菜の種類を判別するAndroidアプリを開発(インターンシップ)
        </div>
        </div>
      </div>

      </div>
      </div>
    </div>
    )
}

export default MainPage