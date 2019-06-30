import React from 'react';
import './What-I-teach.scss';

const WhatITeach = () => {
  return (
    <section className='what-i-teach' id='teach'>
      <div className='about-teach'>
        <div className='text-about-school'>
            На курсе мы осветим эти темы
          <ol>
            <li>Популярные диеты и принцип их работы, почему эффект только временный;</li>
            <li>На что тратятся калории;</li>
            <li>Как происходит похудение/набор? В чем измеряется энергия;</li>
            <li>Как посчитать калории именно тебе, на что стоит обратить внимание. Программы для подсчета;</li>
            <li>Белки, жиры, углеводы. Что это такое и где брать?</li>
            <li>Существует ли «ускоренный» или «замедленный» обмен веществ. Разница аппетита, адаптация к диете.</li>
            <li>Популярные мифы: аутофагия, углеводы после 16:00, холестерин, дробное питание</li>
          </ol>
            Всего 4 вебинара и авторские материалы, которые останутся у вас навсегда
        </div>
      </div>
    </section>
  );
};
export default WhatITeach;
