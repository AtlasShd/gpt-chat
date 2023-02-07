import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_API_KEY,
});
const openai = new OpenAIApi(configuration);

const description = async (keywords) => {
  const completion = await openai.createCompletion({
    model: 'text-davinci-002',
    prompt: `Make text to block "about" in CV about man ${keywords}`,
    max_tokens: 550,
    n: 1,
    // stop: '.', // стоп значения или массив значений, которые приведут к остановке генерции овета
    temperature: 0.5, // используется в softmax gpt-3, как я понял указывает точность ответа
    // best_of: 1, // как я понял количество лучших ответов если n > 1
    // stream: false, // принимать данные в виде потока или нет
    // frequency_penalty: 1, // коэффициент склонности модели к повторению слов
    // presence_penalty: 1, // тоже, что и сверху, но независит от предыдущих ответов
    // best_of_mode: 'avg', // как будут выбираться лучшие ответы
    // top_p: 1, // грубо говоря оригинальность, предсказывание токена исходя из случайности 0.01 - очень оригинальный, 1 - обычное значеное. лучше использовать что-то одно: температуру ИЛИ топ п
    // early_stopping: false, // предваритьная остановка при получении ответа???
    // presence_reward: 1, // gpt написал что тской параметр есть, но в интернете ничего нет(???)
  });

  const { text } = completion.data.choices[0];
  return text;
};

export default description;
