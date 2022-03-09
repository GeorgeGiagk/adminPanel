import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n

	.use(Backend)

	.use(LanguageDetector)

	.use(initReactI18next)

	.init({
		supportedLngs: ['en', 'gr'],
		lng: 'gr',
		backend: {
			loadPath: '/assets/locales/{{lng}}/translation.json',
		},
		fallbackLng: 'en',

		react: {
			wait: true,
		},
	});

export const languages = [
	{
		code: 'en',
		name: 'English',
		country_code: 'en',
	},
	{
		code: 'gr',
		name: 'Ελληνικά',
		country_code: 'gr',
	},
];

export default i18n;
