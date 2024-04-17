import React from 'react'
import s from './Form.module.css'
import { useTranslation } from 'react-i18next'

export const Form = () => {
    const { t } = useTranslation()

    return (
        <div className={s.form}>
            <div>
                <h2>{t('form.ifYouHaveQuestion')}</h2>
                <h4>{t('form.saveYoureContacts')}</h4>
            </div>
            <div className={s.right}>
                <span><input placeholder={t('form.name')} type='text' /></span>
                <span>
                    <input placeholder='Телефон' type='text' />
                    <input placeholder='Email' type='text' />
                </span>
                <span>
                    <input type="checkbox" id="scales" name="scales" />
                    <label for="scales">{t('form.rulse')}</label>
                </span>
                <button>{t('form.consultation')}</button>
            </div>
        </div>
    )
}