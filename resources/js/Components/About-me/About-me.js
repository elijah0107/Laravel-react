import React, { Component } from 'react';
import './About-me.scss';

class AboutMe extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isFullAboutMeText: false,
    };
  }
  render () {
    return (
      <section className='about-me' id='about-me'>
        <div className='photo-block wow fadeInLeft' >
          <div className='photo wow fadeInLeft' >
            <img src={require('./../../images/photo.jpg')} alt='' className='img-photo'/>
          </div>
        </div>
        <div className='text wow fadeInRight'>
          { !this.state.isFullAboutMeText && (
            <p className='text-about-me text-min'>
                    Меня зовут Марина. До того как я связала свою
                    жизнь с фитнесом, я верила в различные мифы про
                    спорт, питание и похудение. Думала, что бывают
                    продукты, которые нужно исключать, питаться по
                    часам, ограничивать себя во всем. Я стала
                    зацикливаться на еде и бояться съесть «не то».
                    В итоге углубилась в тему, разобралась сама
                    и стала помогать другим - я стала тренером.
                    Я заметила, что мои клиенты сталкиваются
                    с такими же проблемами, и создала курс. ...
              <span className='full-about-me'
                onClick={this.transformAboutMe}>
                        читать далее
              </span>
            </p>
          )}
          { this.state.isFullAboutMeText && (
            <p className='text-about-me-full'>
                    Меня зовут Марина. До того как я связала свою
                    жизнь с фитнесом, я верила в различные мифы про
                    спорт, питание и похудение. Думала, что бывают
                    продукты, которые нужно исключать, питаться по
                    часам, ограничивать себя во всем. Я стала
                    зацикливаться на еде и бояться съесть «не то».
                    В итоге углубилась в тему, разобралась сама
                    и стала помогать другим - я стала тренером.
                    Я заметила, что мои клиенты сталкиваются
                    с такими же проблемами, и создала курс.<br/>
                    У меня высшее образование по специальности
                    «учитель английского языка». Педагогическое
                    образование помогло создать структурированную
                    обучающую программу. Знание иностранного языка
                    позволяет читать последние зарубежные статьи и
                    исследования в области фитнеса, питания и здоровья.
                    Какое-то время я работала переводчиком таких статей.
                    А это значит, никаких мифов и антинаучной информации
                    на курсе не будет. Дополнительное образование по
                    специальности «Персональный тренер». Постоянно
                    хожу на семинары и учусь на вебинарах эндокринологов,
                    тренеров и спортсменов. Помимо этого, я КМС по
                    становой тяге и знаю, как добиваться поставленных
                    целей. Сейчас я практикующий тренер и консультант
                    по питанию.
              <span className='full-about-me' onClick={this.transformAboutMe}>скрыть</span>
            </p>
          )}
        </div>
      </section>
    );
  }
  transformAboutMe = () => {
    this.setState({ isFullAboutMeText: !this.state.isFullAboutMeText });
  }
}
export default AboutMe;
