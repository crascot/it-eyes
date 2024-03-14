import React from 'react'
import s from './lesson.module.css'
import { Link } from 'react-router-dom'

const LessonThree = () => {
    return (
        <div className={s.lesson}>
            <h3>Почему стоит изучать именно Java?</h3>
            <div>
                <p>Java подходит для новичков</p>
                <p>
                    Java развился из языков C и C++, которые также широко используются сегодня.
                    Но гораздо более удобный для начинающих.
                    У этого языка объектно-ориентированный подход к программированию,
                    который позволяет даже новеньким разработчикам в короткие сроки освоить язык.
                </p>
            </div>
            <div>
                <p>После Java легко выучить другие языки программирования</p>
                <p>
                    Java позволяет легко понимать другие языки. Если вы знаете английский язык,
                    то освоить Java будет не трудно, синтаксис этого языка программирования похож на английский.
                    А уже после выученного Java можно без проблем осваивать другие языки и инструменты. Они будут казаться понятными и простыми.
                </p>
            </div>
            <div>
                <p>У Java огромное сообщество разработчиков</p>
                <p>
                    Java существует с 90-х годов, за это время сформировалось огромное онлайн-сообщество разработчиков,
                    которые рады помочь независимо от вашего уровня мастерства. На форумах и сайтах таких как Oracle,
                    JCP.org, Stack Overflow можно задать все интересующие вас вопросы по разработке на Java.
                    И получить профессиональный ответ.
                </p>
            </div>
            <div>
                <p>На Java уже написано много кода</p>
                <p>
                    Причиной для изучения Java в 2023 году можно считать тот факт,
                    что на Java уже написано много кода, и кому-то нужно будет поддерживать
                    и обновлять этот код в будущем. Поэтому работодателям нужны будут Java-программисты еще очень долго.
                </p>
            </div>
            <div>
                <p>На Java работают большинство проектов крупных компаний</p>
                <p>
                    Многие известные компании используют Java: Google, Yandex, Сбербанк, Альфа Банк, ВТБ 24, Ebay,
                    Amazon и другие. Согласно Oracle, Java работает на более чем 3 миллиардах устройств
                    по всему миру – больше, чем на любом другом языке.
                </p>
            </div>
            <div className={s.button}>
                <Link to='/'>Завершить</Link>
            </div>
        </div>
    )
}

export default LessonThree
