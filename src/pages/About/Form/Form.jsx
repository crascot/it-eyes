import React from 'react'
import s from './Form.module.css'

export const Form = () => {
    return (
        <div className={s.form}>
            <div>
                <h2>Если у вас остались вопросы - мы поможем</h2>
                <h4>Оставьте свои контактные данные и мы свяжемся с вами</h4>
            </div>
            <div className={s.right}>
                <span><input placeholder='Имя' type='text' /></span>
                <span>
                    <input placeholder='Телефон' type='text' />
                    <input placeholder='Email' type='text' />
                </span>
                <span>
                    <input type="checkbox" id="scales" name="scales" />
                    <label for="scales">Согласен с правилами представления информации</label>
                </span>
                <button>Получить консультацию</button>
            </div>
        </div>
    )
}