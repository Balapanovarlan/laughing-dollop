import { IFormData } from '@/app/types/types'
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form'

const ContactUsForm = () => {

	const {
		register, 
		handleSubmit,
		formState: {errors, isSubmitSuccessful},
		reset,
		setValue,
		watch,
	} = useForm<IFormData>();

	const [agree, setAgree] = useState(false);
	const [successMessage , setSuccessMessage] = useState('');
	const [agreeError, setAgreeError] = useState('');

	useEffect(()=>{
		if(isSubmitSuccessful){
			setSuccessMessage('Форма успешно отправлена');
			reset();
			setAgree(false);
			setTimeout(()=>setSuccessMessage(''),3000);
		}
	},[isSubmitSuccessful, reset]);

	const onSubmit: SubmitHandler<IFormData> = async (data) => {
		if (!agree) {
			setAgreeError('Необходимо согласие с политикой!');
			return;
		}

		setAgreeError('');

		const payload = {
			...data, 
			phone_number: data.phone_number.replace(/\D/g,''),
		};

		console.log("Данные", payload);
		
	}

	const rawPhone = watch('phone_number');

	useEffect(()=>{
		const onlyNums = rawPhone?.replace(/\D/g, '').slice(0,11) || '';
		let formatted = '+7 ';
		if (onlyNums.length>1) {
			formatted += `(${onlyNums.slice(1,4)}`;
		}
		if (onlyNums.length >= 4) {
			formatted += `) ${onlyNums.slice(4,7)}`;
		}
		if (onlyNums.length >=7) {
			formatted += `-${onlyNums.slice(7,9)}`;
		}
		if (onlyNums.length>=9) {
			formatted += `-${onlyNums.slice(9,11)}`;
		}
		setValue('phone_number', formatted);

	},[rawPhone, setValue])

  return (
     <div className="w-full max-w-xl mx-auto px-4 py-10 text-text-gray xl:max-w-[616px] xxl:max-w-[640px]">
      <h2 className="text-3xl font-bold mb-6 xm:text-[40px] xxl:text-5xl">Связаться с нами</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div>
          <label className="text-sm xl:text-lg">Имя</label>
          <input
            {...register("name", { required: "Введите имя" })}
            className="w-full border-b border-text-gray/50 py-2 outline-none placeholder-text-gray/50 xl:text-lg"
            placeholder="Введите имя"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label className="text-sm xl:text-lg">Email</label>
          <input
            {...register("email", {
              required: "Введите email",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Введите корректный email",
              },
            })}
            className="w-full border-b border-text-gray/50 py-2 outline-none placeholder-text-gray/50 xl:text-lg"
            placeholder="Введите email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <label className="text-sm  xl:text-lg">Телефон</label>
          <input
            {...register("phone_number", {
              required: "Введите номер телефона",
              pattern: {
                value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
                message: "Формат: +7 (___) ___-__-__",
              },
            })}
            className="w-full border-b border-text-gray/50 py-2 outline-none placeholder-text-gray/50 xl:text-lg"
            placeholder="+7 (___) ___-__-__"
          />
          {errors.phone_number && <p className="text-red-500 text-sm">{errors.phone_number.message}</p>}
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            checked={agree}
            onChange={() => setAgree(!agree)}
            className="mt-1"
          />
          <label className="text-sm xl:text-lg">
            Я соглашаюсь с{" "}
            <span className="underline text-main-green cursor-pointer">политикой конфиденциальности</span>
          </label>
        </div>
        {agreeError && <p className="text-red-500 text-sm">{agreeError}</p>}

        <button
          type="submit"
          disabled={!agree}
          className={`bg-main-green text-white py-2 px-4 rounded transition-all ${
            !agree ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700"
          }`}
        >
          Отправить
        </button>

        {successMessage && (
          <div className="mt-4 text-main-green text-sm border border-green-300 p-2 rounded bg-green-50">
            {successMessage}
          </div>
        )}
      </form>
    </div>
  )
}

export default ContactUsForm