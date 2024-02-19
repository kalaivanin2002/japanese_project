// pages/index.jsx
"use client"

import React, { useState } from 'react';
// import Question from '@/component/disciplin';
import { useEffect } from 'react';
import { useRouter } from 'next/router';


const initialQuestions = [
  {
    id: 1,
    question: 'I distinguish my capacity to recognise factors beyond my control from my ability to intellectually pinpoint the reasons for such limitations, understanding that true acceptance hinges on cognitive comprehension rather than emotional reactions.',
  },
  {
    id: 2,
    question: 'I closely assess my drive to embrace challenges as avenues for growth, my ability to manage my fear of failure, and my consistent commitment to self-care, recognising that true ambition balances aspiration with well-being to fortify self-confidence and mental resilience.',
  },
  {
    id: 3,
    question: 'I have the agency and authority to make and act on my thoughts and decisions, undeterred by competing personal circumstances, external pressures or societal expectations.',
  },
  {
    id: 4,
    question: '“I keenly observe my emotional resilience and comfort levels when faced with volatility, uncertainty, complexity, and ambiguity, understanding that true awareness lies in my response to these challenges."',
  },
  {
    id: 5,
    question: '“I probe my capacity for introspective thought, my objective open-mindedness, and my diligent nurturing of critical and unbiased thinking, understanding that true discernment is an art of mindful reflection and unbiased evaluation."',
  },
  {
    id: 6,
    question: '"I meticulously examine my personal purpose for entrepreneurship and its alignment with my business vision, understanding that genuine intention weaves a cohesive thread between personal aspiration and organisational mission."',
  },
  {
    id: 7,
    question: '“I possess a genuine and deeply-rooted belief in my business idea, an intense enthusiasm for the impact I can create, and an unwavering drive to deliver meaningful solutions to the problems I aim to solve.”',
  },
  {
    id: 8,
    question: '“My entrepreneurial pursuit goes beyond personal success or profit, but is rooted in a profound sense of purpose that embodies my deeper motivations for why I want to do this.',
  },
  {
    id: 9,
    question: '“I scrutinise my dedication to cultivating relationships with those who bolster my aspirations, empathise with my concerns, and guide me to fine-tuning purpose-driven actions, recognising that true refinement emerges from valuable interpersonal connections."',
  },
  {
    id: 10,
    question: '“I swiftly adapt and recover from challenges and setbacks, am not discouraged by adversity, and actively use difficulty as a learning opportunity for personal growth and motivation to continue working toward my goals.”',
  },
  {
    id: 11,
    question: '“I assess my commitment to owning my reactions to uncontrollable circumstances and my duty to harness my utmost potential as an entrepreneur, recognising that true responsibility is rooted in both accountability and the drive to achieve ones highest purpose.”',
  }
];

const options1 = [
  {
    id: 1,
    name: 1
  },
  {
    id: 2,
    name: 2
  },
  {
    id: 3,
    name: 3
  },
  {
    id: 4,
    name: 4
  },
  {
    id: 5,
    name: 5
  },
]


const options2 = [
  {
    id: 1,
    name: 1
  },
  {
    id: 2,
    name: 2
  },
  {
    id: 3,
    name: 3
  },
  {
    id: 4,
    name: 4
  },
  {
    id: 5,
    name: 5
  },
]

const reportResponse = [
  {
    "questionId": 1,
    "option1": 1,
    "option2": 1,
    "response": " \"The true entrepreneur is a doer, not a dreamer.\" - Nolan Bushnell"
  },
  {
    "questionId": 2,
    "option1": 1,
    "option2": 1,
    "response": "2. \"Make your life a masterpiece imagine no limitations on what you can be, have or do.\" - Brian Tracy"
  },
  {
    "questionId": 3,
    "option1": 1,
    "option2": 1,
    "response": "3. \"Entrepreneurs innovate products, services and how they are delivered.\" - Peter Drucker"
  },
  {
    "questionId": 4,
    "option1": 1,
    "option2": 1,
    "response": "4. \"Build your own dreams, or someone else will hire you to build theirs.\" - Farrah Gray"
  },
  {
    "questionId": 5,
    "option1": 1,
    "option2": 1,
    "response": "5. \"The critical ingredient is getting off your butt and doing something.\" - Nolan Bushnell"
  },
  {
    "questionId": 6,
    "option1": 1,
    "option2": 1,
    "response": "6. \"Ideas are commodity. Execution of them is not.\" - Michael Dell"
  },
  {
    "questionId": 7,
    "option1": 1,
    "option2": 1,
    "response": "7. \"The fastest way to change yourself is to hang out with people who are already the way you want to be.\" - Reid Hoffman"
  },
  {
    "questionId": 8,
    "option1": 1,
    "option2": 1,
    "response": "8. \"Risk more than others think is safe. Dream more than others think is practical.\" - Howard Schultz"
  },
  {
    "questionId": 9,
    "option1": 1,
    "option2": 1,
    "response": "9. \"If you're not embarrassed by the first version of your product, you've launched too late.\" - Reid Hoffman"
  },
  {
    "questionId": 10,
    "option1": 1,
    "option2": 1,
    "response": "10. \"Innovation distinguishes between a leader and a follower.\" - Steve Jobs"
  },
  {
    "questionId": 11,
    "option1": 1,
    "option2": 1,
    "response": "11. \"Success is not final, failure is not fatal: it is the courage to continue that counts.\" - Winston Churchill"
  },
  {
    "questionId": 1,
    "option1": 1,
    "option2": 2,
    "response": "12. \"It's easier to ask forgiveness than it is to get permission.\" - Grace Hopper"
  },
  {
    "questionId": 2,
    "option1": 1,
    "option2": 2,
    "response": "13. \"Make every detail perfect and limit the number of details to perfect.\" - Jack Dorsey"
  },
  {
    "questionId": 3,
    "option1": 1,
    "option2": 2,
    "response": "14. \"Build your business on things that won't change.\" - Seth Godin"
  },
  {
    "questionId": 4,
    "option1": 1,
    "option2": 2,
    "response": "15. \"Success is how high you bounce after you hit bottom.\" - George S. Patton"
  },
  {
    "questionId": 5,
    "option1": 1,
    "option2": 2,
    "response": "16. \"Hire character. Train skill.\" - Peter Schutz"
  },
  {
    "questionId": 6,
    "option1": 1,
    "option2": 2,
    "response": "17. \"Do what you love to do and give it your very best.\" - Elon Musk"
  },
  {
    "questionId": 7,
    "option1": 1,
    "option2": 2,
    "response": "18. \"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.\" - Steve Jobs"
  },
  {
    "questionId": 8,
    "option1": 1,
    "option2": 2,
    "response": "19. \"The question I ask myself almost every day is, 'Am I doing the most important thing I could be doing?'\" - Mark Zuckerberg"
  },
  {
    "questionId": 9,
    "option1": 1,
    "option2": 2,
    "response": "20. \"You miss 100% of the shots you don't take.\" - Wayne Gretzky"
  },
  {
    "questionId": 10,
    "option1": 1,
    "option2": 2,
    "response": "21. \"The only limit to our realization of tomorrow will be our doubts of today.\" - Franklin D. Roosevelt"
  },
  {
    "questionId": 11,
    "option1": 1,
    "option2": 2,
    "response": "22. \"Don't worry about failure; you only have to be right once.\" - Drew Houston"
  },
  {
    "questionId": 1,
    "option1": 1,
    "option2": 3,
    "response": "23. \"Knowledge is limited. Imagination encircles the world.\" - Albert Einstein"
  },
  {
    "questionId": 2,
    "option1": 1,
    "option2": 3,
    "response": "24. \"The biggest risk is not taking any risk.\" - Mark Zuckerberg"
  },
  {
    "questionId": 3,
    "option1": 1,
    "option2": 3,
    "response": "25. \"Do not be embarrassed by your failures, learn from them and start again.\" - Richard Branson"
  },
  {
    "questionId": 4,
    "option1": 1,
    "option2": 3,
    "response": "26. \"The way to get started is to quit talking and begin doing.\" - Walt Disney"
  },
  {
    "questionId": 5,
    "option1": 1,
    "option2": 3,
    "response": "27. \"Success usually comes to those who are too busy looking for it.\" - Henry David Thoreau"
  },
  {
    "questionId": 6,
    "option1": 1,
    "option2": 3,
    "response": "28. \"If you cannot do great things, do small things in a great way.\" - Napoleon Hill"
  },
  {
    "questionId": 7,
    "option1": 1,
    "option2": 3,
    "response": "29. \"You can't connect the dots looking forward; you can only connect them looking backwards.\" - Steve Jobs"
  },
  {
    "questionId": 8,
    "option1": 1,
    "option2": 3,
    "response": "30. \"Don't compromise yourself. You're all you've got.\" - Janis Joplin"
  },
  {
    "questionId": 9,
    "option1": 1,
    "option2": 3,
    "response": "31. \"I didn’t get there by wishing for it or hoping for it, but by working for it.\" – Estée Lauder"
  },
  {
    "questionId": 10,
    "option1": 1,
    "option2": 3,
    "response": "32. \"It’s not about ideas. It’s about making ideas happen.\" – Scott Belsky"
  },
  {
    "questionId": 11,
    "option1": 1,
    "option2": 3,
    "response": "33. \"The only place where success comes before work is in the dictionary.\" – Vidal Sassoon"
  },
  {
    "questionId": 1,
    "option1": 1,
    "option2": 4,
    "response": "34. \"Build your own dreams, or someone else will hire you to build theirs.\" – Farrah Gray"
  },
  {
    "questionId": 2,
    "option1": 1,
    "option2": 4,
    "response": "35. \"Entrepreneurship is living a few years of your life like most people won't, so that you can spend the rest of your life like most people can't.\" – Anonymous"
  },
  {
    "questionId": 3,
    "option1": 1,
    "option2": 4,
    "response": "36. \"Your time is limited, so don't waste it living someone else's life.\" – Steve Jobs"
  },
  {
    "questionId": 4,
    "option1": 1,
    "option2": 4,
    "response": "37. \"Success is walking from failure to failure with no loss of enthusiasm.\" – Winston Churchill"
  },
  {
    "questionId": 5,
    "option1": 1,
    "option2": 4,
    "response": "38. \"Knowing is not enough; we must apply. Wishing is not enough; we must do.\" – Johann Wolfgang Von Goethe"
  },
  {
    "questionId": 6,
    "option1": 1,
    "option2": 4,
    "response": "39. \"Dream bigger. Do bigger.\" – Tim Ferriss"
  },
  {
    "questionId": 7,
    "option1": 1,
    "option2": 4,
    "response": "40. \"Stop chasing the money and start chasing the passion.\" – Tony Hsieh"
  },
  {
    "questionId": 8,
    "option1": 1,
    "option2": 4,
    "response": "41. \"I never dreamed about success. I worked for it.\" – Estée Lauder"
  },
  {
    "questionId": 9,
    "option1": 1,
    "option2": 4,
    "response": "42. \"Do not wait; the time will never be 'just right'. Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along.\" – Napoleon Hill"
  },
  {
    "questionId": 10,
    "option1": 1,
    "option2": 4,
    "response": "43. \"Don't let yesterday take up too much of today.\" – Will Rogers"
  },
  {
    "questionId": 11,
    "option1": 1,
    "option2": 4,
    "response": "44. \"You miss 100% of the shots you don't take.\" – Wayne Gretzky"
  },
  {
    "questionId": 1,
    "option1": 1,
    "option2": 5,
    "response": "45. \"I didn't fail 1000 times. The light bulb was an invention with 1000 steps.\" - Thomas Edison"
  },
  {
    "questionId": 2,
    "option1": 1,
    "option2": 5,
    "response": "46. “Entrepreneurship is living a few years of your life like most people won't, so that you can spend the rest of your life like most people can't.”"
  },
  {
    "questionId": 3,
    "option1": 1,
    "option2": 5,
    "response": "47. “There’s no shortage of remarkable ideas, what’s missing is the will to execute them.” – Seth Godin"
  },
  {
    "questionId": 4,
    "option1": 1,
    "option2": 5,
    "response": "48. “Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.” – Samuel Beckett"
  },
  {
    "questionId": 5,
    "option1": 1,
    "option2": 5,
    "response": "49. “Build your own dreams, or someone else will hire you to build theirs.” – Farrah Gray"
  },
  {
    "questionId": 6,
    "option1": 1,
    "option2": 5,
    "response": "50. “The critical ingredient is getting off your butt and doing something. It’s as simple as that.” – Nolan Bushnell"
  },
  {
    "questionId": 7,
    "option1": 1,
    "option2": 5,
    "response": "51. “If you’re not embarrassed by the first version of your product, you’ve launched too late.” – Reid Hoffman"
  },
  {
    "questionId": 8,
    "option1": 1,
    "option2": 5,
    "response": "52. “Make every detail perfect and limit the number of details to perfect.” – Jack Dorsey"
  },
  {
    "questionId": 9,
    "option1": 1,
    "option2": 5,
    "response": "53. “Hire character. Train skill.” – Peter Schutz"
  },
  {
    "questionId": 10,
    "option1": 1,
    "option2": 5,
    "response": "54. “It’s easier to ask forgiveness than it is to get permission.” – Grace Hopper"
  },
  {
    "questionId": 11,
    "option1": 1,
    "option2": 5,
    "response": "55. “Do what you love to do and give it your very best.” – Elon Musk"
  },
  {
    "questionId": 1,
    "option1": 2,
    "option2": 1,
    "response": "56. \"The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.\" - Winston Churchill"
  },
  {
    "questionId": 2,
    "option1": 2,
    "option2": 1,
    "response": "57. “You only have to do a very few things right in your life so long as you don’t do too many things wrong.” – Warren Buffett"
  },
  {
    "questionId": 3,
    "option1": 2,
    "option2": 1,
    "response": "58. “Think of what nobody yet has thought of, but be quick about it. If you invent something useful, something that increases happiness or reduces hardship, you may pat yourself on the back over your achievement. But don't forget that untold numbers who had nothing to do with the accomplishment will have a share in your rewards.” – Joseph Wood Krutch"
  },
  {
    "questionId": 4,
    "option1": 2,
    "option2": 1,
    "response": "59. “A person who never made a mistake never tried anything new.” – Albert Einstein"
  },
  {
    "questionId": 5,
    "option1": 2,
    "option2": 1,
    "response": "60. “The ones who are crazy enough to think they can change the world, are the ones that do.” – Steve Jobs"
  },
  {
    "questionId": 6,
    "option1": 2,
    "option2": 1,
    "response": "61. “Don’t let people tell you your ideas won’t work. If you’re passionate about an idea that’s stuck in your head, find a way to build it so you can prove to yourself that it doesn’t work.” – Fadi Chehadé"
  },
  {
    "questionId": 7,
    "option1": 2,
    "option2": 1,
    "response": "62. “Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.” – Mark Twain"
  },
  {
    "questionId": 8,
    "option1": 2,
    "option2": 1,
    "response": "63. “Ideas are commodity. Execution of them is not.” – Michael Dell"
  },
  {
    "questionId": 9,
    "option1": 2,
    "option2": 1,
    "response": "64. “Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.” – Steve Jobs"
  },
  {
    "questionId": 10,
    "option1": 2,
    "option2": 1,
    "response": "65. “Don’t worry about failure; you only have to be right once.” – Drew Houston"
  },
  {
    "questionId": 11,
    "option1": 2,
    "option2": 1,
    "response": "66. “The fastest way to change yourself is to hang out with people who are already the way you want to be.” – Reid Hoffman"
  },
  {
    "questionId": 1,
    "option1": 2,
    "option2": 2,
    "response": "67. “You can't connect the dots looking forward; you can only connect them looking backwards.” – Steve Jobs"
  },
  {
    "questionId": 2,
    "option1": 2,
    "option2": 2,
    "response": "68. “Risk more than others think is safe. Dream more than others think is practical.” – Howard Schultz"
  },
  {
    "questionId": 3,
    "option1": 2,
    "option2": 2,
    "response": "69. “You miss 100% of the shots you don't take.” – Wayne Gretzky"
  },
  {
    "questionId": 4,
    "option1": 2,
    "option2": 2,
    "response": "70. \"The best way to predict the future is to create it.\" - Peter Drucker"
  },
  {
    "questionId": 5,
    "option1": 2,
    "option2": 2,
    "response": "71. “There is only one boss. The customer. And he can fire everybody in the company from the chairman on down, simply by spending his money somewhere else.” – Sam Walton"
  },
  {
    "questionId": 6,
    "option1": 2,
    "option2": 2,
    "response": "72. “The way to get started is to quit talking and begin doing.” – Walt Disney"
  },
  {
    "questionId": 7,
    "option1": 2,
    "option2": 2,
    "response": "73. “Your most unhappy customers are your greatest source of learning.” – Bill Gates"
  },
  {
    "questionId": 8,
    "option1": 2,
    "option2": 2,
    "response": "74. “Don’t be afraid to give up the good to go for the great.” – John D. Rockefeller"
  },
  {
    "questionId": 9,
    "option1": 2,
    "option2": 2,
    "response": "75. \"The true entrepreneur is a doer, not a dreamer.\" - Nolan Bushnell"
  },
  {
    "questionId": 10,
    "option1": 2,
    "option2": 2,
    "response": "76. \"Make every detail perfect and limit the number of details to perfect.\" - Jack Dorsey"
  },
  {
    "questionId": 11,
    "option1": 2,
    "option2": 2,
    "response": "77. \"The entrepreneur builds an enterprise; the technician builds a job.\" - Michael Gerber"
  },
  {
    "questionId": 1,
    "option1": 2,
    "option2": 3,
    "response": "78. \"There is only one real failure in life that is possible, and that is not to try.\" - Fred Lebow"
  },
  {
    "questionId": 2,
    "option1": 2,
    "option2": 3,
    "response": "79. \"Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.\" - Mary Kay Ash"
  },
  {
    "questionId": 3,
    "option1": 2,
    "option2": 3,
    "response": "80. \"Success seems to be connected with action. Successful people keep moving.\" - Conrad Hilton"
  },
  {
    "questionId": 4,
    "option1": 2,
    "option2": 3,
    "response": "81. \"Build a dream and the dream will build you.\" - Robert H. Schuller"
  },
  {
    "questionId": 5,
    "option1": 2,
    "option2": 3,
    "response": "82. \"Do something today that your future self will thank you for.\" - Unknown"
  },
  {
    "questionId": 6,
    "option1": 2,
    "option2": 3,
    "response": "83. \"Discipline is doing what you really don't want to do so you can perform at your highest level.\" - Brian Tracy"
  },
  {
    "questionId": 7,
    "option1": 2,
    "option2": 3,
    "response": "84. “Imagination is everything. It is the preview of life's coming attractions.” - Albert Einstein"
  },
  {
    "questionId": 8,
    "option1": 2,
    "option2": 3,
    "response": "85. \"There are no secrets to success. It is the result of preparation, hard work, and learning from failure.\" - Colin Powell"
  },
  {
    "questionId": 9,
    "option1": 2,
    "option2": 3,
    "response": "86. “Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.” - Helen Keller"
  },
  {
    "questionId": 10,
    "option1": 2,
    "option2": 3,
    "response": "87. “Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.” - Albert Schweitzer"
  },
  {
    "questionId": 11,
    "option1": 2,
    "option2": 3,
    "response": "88. “Only put off until tomorrow what you are willing to die having left undone.” - Pablo Picasso"
  },
  {
    "questionId": 1,
    "option1": 2,
    "option2": 4,
    "response": "89. “Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That’s the classic entrepreneur.” - Mohnish Pabrai"
  },
  {
    "questionId": 2,
    "option1": 2,
    "option2": 4,
    "response": "90. “I cannot give you the formula for success, but I can give you the formula for failure, which is: Try to please everybody.” - Herbert Swope"
  },
  {
    "questionId": 3,
    "option1": 2,
    "option2": 4,
    "response": "91. “If you’re not embarrassed by the first version of your product, you’ve launched too late.” - Reid Hoffman"
  },
  {
    "questionId": 4,
    "option1": 2,
    "option2": 4,
    "response": "92. \"Either you run the day or the day runs you.\" - Jim Rohn"
  },
  {
    "questionId": 5,
    "option1": 2,
    "option2": 4,
    "response": "93. “Ideas are easy. Implementation is hard.” - Guy Kawasaki"
  },
  {
    "questionId": 6,
    "option1": 2,
    "option2": 4,
    "response": "94. \"The battles that count aren't the ones for gold medals. The struggles within yourself--the invisible battles inside all of us--that's where it's at.\" - Jesse Owens"
  },
  {
    "questionId": 7,
    "option1": 2,
    "option2": 4,
    "response": "95. “Success is how high you bounce when you hit bottom.” - George S. Patton"
  },
  {
    "questionId": 8,
    "option1": 2,
    "option2": 4,
    "response": "96. “If you’re not stubborn, you’ll give up on experiments too soon. And if you’re not flexible, you’ll pound your head against the wall and you won’t see a different solution to a problem you’re trying to solve.” - Jeff Bezos"
  },
  {
    "questionId": 9,
    "option1": 2,
    "option2": 4,
    "response": "97. “Your most unhappy customers are your greatest source of learning.” - Bill Gates"
  },
  {
    "questionId": 10,
    "option1": 2,
    "option2": 4,
    "response": "98. “I have not failed. I've just found 10,000 ways that won't work.” – Thomas Edison"
  },
  {
    "questionId": 11,
    "option1": 2,
    "option2": 4,
    "response": "99. “The way to get started is to quit talking and begin doing.” - Walt Disney"
  },
  {
    "questionId": 1,
    "option1": 2,
    "option2": 5,
    "response": "100. “The only limit to our realization of tomorrow will be our doubts of today.” – Franklin D. Roosevelt"
  },
  {
    "questionId": 2,
    "option1": 2,
    "option2": 5,
    "response": "101. “When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.” – Henry Ford"
  },
  {
    "questionId": 3,
    "option1": 2,
    "option2": 5,
    "response": "102. “Fall seven times and stand up eight.” - Japanese proverb"
  },
  {
    "questionId": 4,
    "option1": 2,
    "option2": 5,
    "response": "103. “It’s hard to beat a person who never gives up.” – Babe Ruth"
  },
  {
    "questionId": 5,
    "option1": 2,
    "option2": 5,
    "response": "104. “You build on failure. You use it as a stepping stone. Close the door on the past. You don’t try to forget the mistakes, but you don’t dwell on it. You don’t let it have any of your energy, or any of your time, or any of your space.” – Johnny Cash"
  },
  {
    "questionId": 6,
    "option1": 2,
    "option2": 5,
    "response": "105. “I didn’t fail. I just found 2,000 ways not to invent a lightbulb.” – Thomas Edison"
  },
  {
    "questionId": 7,
    "option1": 2,
    "option2": 5,
    "response": "106. \"The only place where success comes before work is in the dictionary.\" - Vidal Sassoon"
  },
  {
    "questionId": 8,
    "option1": 2,
    "option2": 5,
    "response": "107. \"Hire character. Train skill.\" - Peter Schutz"
  },
  {
    "questionId": 9,
    "option1": 2,
    "option2": 5,
    "response": "108. “Do not wait; the time will never be ‘just right’. Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along.” – Napoleon Hill"
  },
  {
    "questionId": 10,
    "option1": 2,
    "option2": 5,
    "response": "109. “If you think you are too small to make a difference, try sleeping with a mosquito.” - Dalai Lama"
  },
  {
    "questionId": 11,
    "option1": 2,
    "option2": 5,
    "response": "110. “Chase the vision, not the money, the money will end up following you.” – Tony Hsieh"
  },
  {
    "questionId": 1,
    "option1": 3,
    "option2": 1,
    "response": "111. “You’ve got to stop doing all the things that people have tried, tested, and found out don’t work.” – Michael Dunlop"
  },
  {
    "questionId": 2,
    "option1": 3,
    "option2": 1,
    "response": "112. “From small beginnings come great things.” - Unknown"
  },
  {
    "questionId": 3,
    "option1": 3,
    "option2": 1,
    "response": "113. “Don’t worry about failure; you only have to be right once.” - Drew Houston"
  },
  {
    "questionId": 4,
    "option1": 3,
    "option2": 1,
    "response": "114. “Success is not final, failure is not fatal: it is the courage to continue that counts.” - Winston Churchill"
  },
  {
    "questionId": 5,
    "option1": 3,
    "option2": 1,
    "response": "115. “It’s easier to ask forgiveness than it is to get permission.” - Grace Hopper"
  },
  {
    "questionId": 6,
    "option1": 3,
    "option2": 1,
    "response": "116. \"Make your life a masterpiece. Imagine no limitations on what you can be, have or do.\" - Brian Tracy"
  },
  {
    "questionId": 7,
    "option1": 3,
    "option2": 1,
    "response": "117. “Cry me a river, build a bridge, and get over it.” – Justin Timberlake"
  },
  {
    "questionId": 8,
    "option1": 3,
    "option2": 1,
    "response": "118. \"I find that the harder I work, the more luck I seem to have.\" - Thomas Jefferson"
  },
  {
    "questionId": 9,
    "option1": 3,
    "option2": 1,
    "response": "119. “Do not be embarrassed by your failures, learn from them and start again.” - Richard Branson"
  },
  {
    "questionId": 10,
    "option1": 3,
    "option2": 1,
    "response": "120. “Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, you can achieve.” – Mary Kay Ash"
  },
  {
    "questionId": 11,
    "option1": 3,
    "option2": 1,
    "response": "121. “Success is not how high you bounce when you hit bottom- it's how high you bounce when you hit top.” - George S. Patton"
  },
  {
    "questionId": 1,
    "option1": 3,
    "option2": 3,
    "response": "122. “Outliers are those who have been given opportunities and who have had the strength and presence of mind to seize them.” - Malcolm Gladwell"
  },
  {
    "questionId": 2,
    "option1": 3,
    "option2": 3,
    "response": "123. “You must either modify your dreams or magnify your skills.” - Jim Rohn"
  },
  {
    "questionId": 3,
    "option1": 3,
    "option2": 3,
    "response": "124. “You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.” - George Lorimer"
  },
  {
    "questionId": 4,
    "option1": 3,
    "option2": 3,
    "response": "125. “The only way to do great work is to love what you do.” - Steve Jobs"
  },
  {
    "questionId": 5,
    "option1": 3,
    "option2": 3,
    "response": "126. “It’s not about ideas. It’s about making ideas happen.” - Scott Belsky"
  },
  {
    "questionId": 6,
    "option1": 3,
    "option2": 3,
    "response": "127. “Hold fast to dreams, for if dreams die, life is a broken winged bird that cannot fly.” - Langston Hughes"
  },
  {
    "questionId": 7,
    "option1": 3,
    "option2": 3,
    "response": "128. “The only limit to your impact is your imagination and commitment.” - Tony Robbins"
  },
  {
    "questionId": 8,
    "option1": 3,
    "option2": 3,
    "response": "129. “The best way to predict your future is to create it.” - Abraham Lincoln"
  },
  {
    "questionId": 9,
    "option1": 3,
    "option2": 3,
    "response": "130. “One of the huge mistakes people make is that they try to force an interest on themselves. You don't choose your passions; your passions choose you.” - Jeff Bezos"
  },
  {
    "questionId": 10,
    "option1": 3,
    "option2": 3,
    "response": "131. “The question I ask myself almost every day is, ‘Am I doing the most important thing I could be doing?’” - Mark Zuckerberg"
  },
  {
    "questionId": 11,
    "option1": 3,
    "option2": 3,
    "response": "132. “Don’t worry about failure; you only have to be right once.” - Drew Houston"
  },
  {
    "questionId": 1,
    "option1": 3,
    "option2": 4,
    "response": "133. “The harder I work, the luckier I get.” - Samuel Goldwyn"
  },
  {
    "questionId": 2,
    "option1": 3,
    "option2": 4,
    "response": "134. “The fastest way to change yourself is to hang out with people who are already the way you want to be.” - Reid Hoffman"
  },
  {
    "questionId": 3,
    "option1": 3,
    "option2": 4,
    "response": "135. “You should never regret anything in life. If it's good, it's wonderful. If it's bad, it's experience.” - Victoria Holt"
  },
  {
    "questionId": 4,
    "option1": 3,
    "option2": 4,
    "response": "136. “Stay hungry, stay foolish.” - Steve Jobs"
  },
  {
    "questionId": 5,
    "option1": 3,
    "option2": 4,
    "response": "137. “Do or do not. There is no try.” - Yoda"
  },
  {
    "questionId": 6,
    "option1": 3,
    "option2": 4,
    "response": "138. \"You can waste your lives drawing lines. Or you can live your life crossing them.\" - Shonda Rhimes"
  },
  {
    "questionId": 7,
    "option1": 3,
    "option2": 4,
    "response": "139. “Don’t play for safety. It’s the most dangerous thing in the world.” - Hugh Macleod"
  },
  {
    "questionId": 8,
    "option1": 3,
    "option2": 4,
    "response": "140. \"No guts, no story.\" - Chris Brady"
  },
  {
    "questionId": 9,
    "option1": 3,
    "option2": 4,
    "response": "141. “Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.” - Helen Keller"
  },
  {
    "questionId": 10,
    "option1": 3,
    "option2": 4,
    "response": "142. “Problems are not stop signs, they are guidelines.” - Robert Schuller"
  },
  {
    "questionId": 11,
    "option1": 3,
    "option2": 4,
    "response": "143. “Fall seven times and stand up eight.” - Japanese proverb"
  },
  {
    "questionId": 1,
    "option1": 3,
    "option2": 2,
    "response": "144. “It’s not about ideas. It’s about making ideas happen.” - Scott Belsky"
  },
  {
    "questionId": 2,
    "option1": 3,
    "option2": 5,
    "response": "145. \"We cannot solve problems with the kind of thinking we employed when we came up with them.\" - Albert Einstein"
  },
  {
    "questionId": 3,
    "option1": 3,
    "option2": 2,
    "response": "146. “Don't let the fear of losing be greater than the excitement of winning.” - Robert Kiyosaki"
  },
  {
    "questionId": 4,
    "option1": 3,
    "option2": 5,
    "response": "147. “Success is not what you have, but who you are.” - Bo Bennett"
  },
  {
    "questionId": 5,
    "option1": 3,
    "option2": 2,
    "response": "148. \"Believe you can and you're halfway there.\" -Theodore Roosevelt"
  },
  {
    "questionId": 6,
    "option1": 3,
    "option2": 5,
    "response": "149. “I attribute my success to this: I never gave or took any excuse.” - Florence Nightingale"
  },
  {
    "questionId": 7,
    "option1": 3,
    "option2": 2,
    "response": "150. “You only have to do a very few things right in your life so long as you don’t do too many things wrong.” - Warren"
  },
  {
    "questionId": 8,
    "option1": 3,
    "option2": 5,
    "response": "151. \"The entrepreneur is essentially a visualizer and actualizer.\" - Robert Ronstadt"
  },
  {
    "questionId": 9,
    "option1": 3,
    "option2": 2,
    "response": "152. \"Make it happen now, not tomorrow. Tomorrow is a loser's excuse.\" - Andrew Fashion"
  },
  {
    "questionId": 10,
    "option1": 3,
    "option2": 5,
    "response": "153. \"If you want something new, you have to stop doing something old.\" - Peter F. Drucker"
  },
  {
    "questionId": 11,
    "option1": 3,
    "option2": 2,
    "response": "154. \"Build your own dreams, or someone else will hire you to build theirs.\" - Farrah Gray"
  },
  {
    "questionId": 1,
    "option1": 3,
    "option2": 5,
    "response": "155. \"The critical ingredient is getting off your butt and doing something.\" - Nolan Bushnell"
  },
  {
    "questionId": 2,
    "option1": 3,
    "option2": 2,
    "response": "156. \"Ideas are easy. Implementation is hard.\" - Guy Kawasaki"
  },
  {
    "questionId": 3,
    "option1": 3,
    "option2": 5,
    "response": "157. \"It’s not about ideas. It’s about making ideas happen.\" - Scott Belsky"
  },
  {
    "questionId": 4,
    "option1": 3,
    "option2": 2,
    "response": "158. \"The only way to do great work is to love what you do.\" - Steve Jobs"
  },
  {
    "questionId": 5,
    "option1": 3,
    "option2": 5,
    "response": "159. \"Optimism is the faith that leads to achievement.\" - Helen Keller"
  },
  {
    "questionId": 6,
    "option1": 3,
    "option2": 2,
    "response": "160. \"Problems are not stop signs, they are guidelines.\" - Robert Schuller"
  },
  {
    "questionId": 7,
    "option1": 3,
    "option2": 5,
    "response": "161. \"We cannot solve problems with the kind of thinking we employed when we came up with them.\" - Albert Einstein"
  },
  {
    "questionId": 8,
    "option1": 3,
    "option2": 2,
    "response": "162. \"Believe you can and you're halfway there.\" - Theodore Roosevelt"
  },
  {
    "questionId": 9,
    "option1": 3,
    "option2": 5,
    "response": "163. \"The battles that count aren't the ones for gold medals. The struggles within yourself--the invisible battles inside all of us--that's where it's at.\" - Jesse Owens"
  },
  {
    "questionId": 10,
    "option1": 3,
    "option2": 2,
    "response": "164. \"From small beginnings come great things.\" - Unknown"
  },
  {
    "questionId": 11,
    "option1": 3,
    "option2": 5,
    "response": "165. \"You miss 100% of the shots you don't take.\" - Wayne Gretzky"
  },
  {
    "questionId": 1,
    "option1": 4,
    "option2": 1,
    "response": "166. \"The only limit to our realization of tomorrow will be our doubts of today.\" - Franklin D. Roosevelt"
  },
  {
    "questionId": 2,
    "option1": 4,
    "option2": 1,
    "response": "167. \"Winning isn't everything, but wanting to win is.\" - Vince Lombardi"
  },
  {
    "questionId": 3,
    "option1": 4,
    "option2": 1,
    "response": "168. \"Either you run the day or the day runs you.\" - Jim Rohn"
  },
  {
    "questionId": 4,
    "option1": 4,
    "option2": 1,
    "response": "169. \"Perpetual optimism is a force multiplier.\" - Colin Powell"
  },
  {
    "questionId": 5,
    "option1": 4,
    "option2": 1,
    "response": "170. “Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.” – Steve Jobs"
  },
  {
    "questionId": 6,
    "option1": 4,
    "option2": 1,
    "response": "171. “The fastest way to change yourself is to hang out with people who are already the way you want to be.” - Reid Hoffman"
  },
  {
    "questionId": 7,
    "option1": 4,
    "option2": 1,
    "response": "172. “The only way to do great work is to love what you do.” - Steve Jobs"
  },
  {
    "questionId": 8,
    "option1": 4,
    "option2": 1,
    "response": "173. “A person who never made a mistake never tried anything new.” - Albert Einstein"
  },
  {
    "questionId": 9,
    "option1": 4,
    "option2": 1,
    "response": "174. \"Entrepreneurs innovate products, services and how they are delivered.\" - Peter Drucker"
  },
  {
    "questionId": 10,
    "option1": 4,
    "option2": 1,
    "response": "175. \"You don't concentrate on risks. You concentrate on results. No risk is too great to prevent the necessary job from getting done.\" - Chuck Yeager"
  },
  {
    "questionId": 11,
    "option1": 4,
    "option2": 1,
    "response": "176. “Your most unhappy customers are your greatest source of learning.” - Bill Gates"
  },
  {
    "questionId": 1,
    "option1": 4,
    "option2": 2,
    "response": "177. “Delivering happiness is my model for business success.” - Tony Hsieh"
  },
  {
    "questionId": 2,
    "option1": 4,
    "option2": 2,
    "response": "178. “Do something today that your future self will thank you for.” - Unknown"
  },
  {
    "questionId": 3,
    "option1": 4,
    "option2": 2,
    "response": "179. “Build your own dreams, or someone else will hire you to build theirs.” – Farrah Gray"
  },
  {
    "questionId": 4,
    "option1": 4,
    "option2": 2,
    "response": "180. “No guts, no story.” - Chris Brady"
  },
  {
    "questionId": 5,
    "option1": 4,
    "option2": 2,
    "response": "181. “If you think you are too small to make a difference, try sleeping with a mosquito.” - Dalai Lama"
  },
  {
    "questionId": 6,
    "option1": 4,
    "option2": 2,
    "response": "182. \"The entrepreneur builds an enterprise; the technician builds a job.\" – Michael Gerber"
  },
  {
    "questionId": 7,
    "option1": 4,
    "option2": 2,
    "response": "183. “Cry me a river, build a bridge, and get over it.” – Justin Timberlake"
  },
  {
    "questionId": 8,
    "option1": 4,
    "option2": 2,
    "response": "184. “Do not wait; the time will never be ‘just right’. Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along.” – Napoleon Hill"
  },
  {
    "questionId": 9,
    "option1": 4,
    "option2": 2,
    "response": "185. “Hire character. Train skill.” – Peter Schutz"
  },
  {
    "questionId": 10,
    "option1": 4,
    "option2": 2,
    "response": "186. “Do not be embarrassed by your failures, learn from them and start again.” – Richard Branson"
  },
  {
    "questionId": 11,
    "option1": 4,
    "option2": 2,
    "response": "187. \"Knowing is not enough; we must apply. Wishing is not enough; we must do.\" - Johann Wolfgang von Goethe"
  },
  {
    "questionId": 1,
    "option1": 4,
    "option2": 3,
    "response": "188. “From small beginnings come great things.” – Unknown"
  },
  {
    "questionId": 2,
    "option1": 4,
    "option2": 3,
    "response": "189. “You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.” – George Lorimer"
  },
  {
    "questionId": 3,
    "option1": 4,
    "option2": 3,
    "response": "190. “Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, you can achieve.” – Mary Kay Ash"
  },
  {
    "questionId": 4,
    "option1": 4,
    "option2": 3,
    "response": "191. “Chase the vision, not the money. The money will end up following you.” – Tony Hsieh"
  },
  {
    "questionId": 5,
    "option1": 4,
    "option2": 3,
    "response": "192. “You may delay, but time will not.” – Benjamin Franklin"
  },
  {
    "questionId": 6,
    "option1": 4,
    "option2": 3,
    "response": "193. “Hold fast to dreams, for if dreams die, life is a broken winged bird that cannot fly.” – Langston Hughes"
  },
  {
    "questionId": 7,
    "option1": 4,
    "option2": 3,
    "response": "194. “Success seems to be connected with action. Successful people keep moving.” – Conrad Hilton"
  },
  {
    "questionId": 8,
    "option1": 4,
    "option2": 3,
    "response": "195. “I find that the harder I work, the more luck I seem to have.” – Thomas Jefferson"
  },
  {
    "questionId": 9,
    "option1": 4,
    "option2": 3,
    "response": "196. “Do not wait; the time will never be ‘just right’. Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along.” – Napoleon Hill"
  },
  {
    "questionId": 10,
    "option1": 4,
    "option2": 3,
    "response": "197. “Outliers are those who have been given opportunities and who have had the strength and presence of mind to seize them.” – Malcolm Gladwell"
  },
  {
    "questionId": 11,
    "option1": 4,
    "option2": 3,
    "response": "198. “There's no shortage of remarkable ideas, what's missing is the will to execute them.” – Seth Godin"
  },
  {
    "questionId": 1,
    "option1": 4,
    "option2": 4,
    "response": "199. “Believe in your flyness...conquer your shyness.” – Meek Mill"
  },
  {
    "questionId": 2,
    "option1": 4,
    "option2": 4,
    "response": "200. “Success isn’t just about what you accomplish in your life; it’s about what you inspire others to do.” – Unknown"
  },
  {
    "questionId": 3,
    "option1": 4,
    "option2": 4,
    "response": "201. “The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.” – Steve Jobs"
  },
  {
    "questionId": 4,
    "option1": 4,
    "option2": 4,
    "response": "202. “Ideas are easy. Implementation is hard.” - Guy Kawasaki"
  },
  {
    "questionId": 5,
    "option1": 4,
    "option2": 4,
    "response": "203. “The way to get started is to quit talking and begin doing.” – Walt Disney"
  },
  {
    "questionId": 6,
    "option1": 4,
    "option2": 4,
    "response": "204. “If you want something new, you have to stop doing something old.” – Peter F. Drucker"
  },
  {
    "questionId": 7,
    "option1": 4,
    "option2": 4,
    "response": "205. “Don’t play for safety. It’s the most dangerous thing in the world.” – Hugh MacLeod"
  },
  {
    "questionId": 8,
    "option1": 4,
    "option2": 4,
    "response": "206. “You only have to do a very few things right in your life so long as you don’t do too many things wrong.” – Warren Buffett"
  },
  {
    "questionId": 9,
    "option1": 4,
    "option2": 4,
    "response": "207. “All humans are entrepreneurs not because they should start companies but because the will to create is encoded in human DNA.” – Reid Hoffman"
  },
  {
    "questionId": 10,
    "option1": 4,
    "option2": 4,
    "response": "208. “Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.” – Albert Schweitzer"
  },
  {
    "questionId": 11,
    "option1": 4,
    "option2": 4,
    "response": "209. “Do something today that your future self will thank you for.” – Unknown"
  },
  {
    "questionId": 1,
    "option1": 4,
    "option2": 5,
    "response": "210. “You shouldn’t focus on why you can’t do something, which is what most people do. You should focus on why perhaps you can, and be one of the exceptions.” – Steve Case"
  },
  {
    "questionId": 2,
    "option1": 4,
    "option2": 5,
    "response": "211. “Success is not how high you bounce when you hit bottom—it's how high you bounce when you hit top.” – George S. Patton"
  },
  {
    "questionId": 3,
    "option1": 4,
    "option2": 5,
    "response": "212. \"The critical ingredient is getting off your butt and doing something. It's as simple as that.\" – Nolan Bushnell"
  },
  {
    "questionId": 4,
    "option1": 4,
    "option2": 5,
    "response": "213. “Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.” – Steve Jobs"
  },
  {
    "questionId": 5,
    "option1": 4,
    "option2": 5,
    "response": "214. “Make every detail perfect and limit the number of details to perfect.” – Jack Dorsey"
  },
  {
    "questionId": 6,
    "option1": 4,
    "option2": 5,
    "response": "215. “The way to get started is to quit talking and begin doing.” – Walt Disney"
  },
  {
    "questionId": 7,
    "option1": 4,
    "option2": 5,
    "response": "216. “The fastest way to change yourself is to hang out with people who are already the way you want to be.” – Reid Hoffman"
  },
  {
    "questionId": 8,
    "option1": 4,
    "option2": 5,
    "response": "217. \"You can't connect the dots looking forward; you can only connect them looking backwards.\" - Steve Jobs"
  },
  {
    "questionId": 9,
    "option1": 4,
    "option2": 5,
    "response": "218. “Learn from yesterday, live for today, hope for tomorrow.” – Albert Einstein"
  },
  {
    "questionId": 10,
    "option1": 4,
    "option2": 5,
    "response": "219. \"Stay hungry. Stay foolish.\" - Steve Jobs"
  },
  {
    "questionId": 11,
    "option1": 4,
    "option2": 5,
    "response": "220. “Believe you can and you’re halfway there.” – Theodore Roosevelt"
  },
  {
    "questionId": 1,
    "option1": 5,
    "option2": 1,
    "response": "221. “Don’t let people tell you your ideas won’t work. If you’re passionate about an idea that’s stuck in your head, find a way to build it so you can prove to yourself that it doesn’t work.” – Elon Musk"
  },
  {
    "questionId": 2,
    "option1": 5,
    "option2": 1,
    "response": "222. “If you’re not stubborn, you’ll give up on experiments too soon. And if you’re not flexible, you’ll pound your head against the wall and you won’t see a different solution to a problem you’re trying to solve.” – Jeff Bezos"
  },
  {
    "questionId": 3,
    "option1": 5,
    "option2": 1,
    "response": "223. “Have the courage to follow your heart and intuition. They somehow know what you truly want to become.” – Steve Jobs"
  },
  {
    "questionId": 4,
    "option1": 5,
    "option2": 1,
    "response": "224. \"Ideas are commodity. Execution of them is not.\" - Michael Dell"
  },
  {
    "questionId": 5,
    "option1": 5,
    "option2": 1,
    "response": "225. \"Stop chasing the money and start chasing the passion.\" - Tony Hsieh"
  },
  {
    "questionId": 6,
    "option1": 5,
    "option2": 1,
    "response": "226. \"I never dreamed about success. I worked for it.\" - Estée Lauder"
  },
  {
    "questionId": 7,
    "option1": 5,
    "option2": 1,
    "response": "227. \"Do not be embarrassed by your failures, learn from them and start again.\" - Richard Branson"
  },
  {
    "questionId": 8,
    "option1": 5,
    "option2": 1,
    "response": "228. \"It’s not about ideas. It’s about making ideas happen.\" - Scott Belsky"
  },
  {
    "questionId": 9,
    "option1": 5,
    "option2": 1,
    "response": "229. \"The only place where success comes before work is in the dictionary.\" - Vidal Sassoon"
  },
  {
    "questionId": 10,
    "option1": 5,
    "option2": 1,
    "response": "230. \"The battles that count aren't the ones for gold medals. The struggles within yourself--the invisible battles inside all of us--that's where it's at.\" - Jesse Owens"
  },
  {
    "questionId": 11,
    "option1": 5,
    "option2": 1,
    "response": "231. \"You may delay, but time will not.\" - Benjamin Franklin"
  },
  {
    "questionId": 1,
    "option1": 5,
    "option2": 2,
    "response": "232. \"Believe you can and you're halfway there.\" - Theodore Roosevelt"
  },
  {
    "questionId": 2,
    "option1": 5,
    "option2": 2,
    "response": "233. \"Knowing is not enough; we must apply. Wishing is not enough; we must do.\" - Johann Wolfgang von Goethe"
  },
  {
    "questionId": 3,
    "option1": 5,
    "option2": 2,
    "response": "234. \"From small beginnings come great things.\" - Unknown"
  },
  {
    "questionId": 4,
    "option1": 5,
    "option2": 2,
    "response": "235. \"You've got to get up every morning with determination if you're going to go to bed with satisfaction.\" - George Lorimer"
  },
  {
    "questionId": 5,
    "option1": 5,
    "option2": 2,
    "response": "236. \"Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, you can achieve.\" - Mary Kay Ash"
  },
  {
    "questionId": 6,
    "option1": 5,
    "option2": 2,
    "response": "237. \"I attribute my success to this: I never gave or took any excuse.\" - Florence Nightingale"
  },
  {
    "questionId": 7,
    "option1": 5,
    "option2": 2,
    "response": "238. \"You miss 100% of the shots you don't take.\" - Wayne Gretzky"
  },
  {
    "questionId": 8,
    "option1": 5,
    "option2": 2,
    "response": "239. \"Winners are not afraid of losing. But losers are. Failure is part of the process of success. People who avoid failure also avoid success.\" - Robert Kiyosaki"
  },
  {
    "questionId": 9,
    "option1": 5,
    "option2": 2,
    "response": "240. \"The entrepreneur builds an enterprise; the technician builds a job.\" - Michael Gerber"
  },
  {
    "questionId": 10,
    "option1": 5,
    "option2": 2,
    "response": "241. \"You may have to fight a battle more than once to win it.\" - Margaret Thatcher"
  },
  {
    "questionId": 11,
    "option1": 5,
    "option2": 2,
    "response": "242. \"Don't bunt. Aim out of the ballpark.\" - David Ogilvy"
  },
  {
    "questionId": 1,
    "option1": 5,
    "option2": 3,
    "response": "243. \"Success is walking from failure to failure with no loss of enthusiasm.\" - Winston Churchill"
  },
  {
    "questionId": 2,
    "option1": 5,
    "option2": 3,
    "response": "244. \"Every strike brings me closer to the next home run.\" - Babe Ruth"
  },
  {
    "questionId": 3,
    "option1": 5,
    "option2": 3,
    "response": "245. \"Build your own dreams, or someone else will hire you to build theirs.\" - Farrah Gray"
  },
  {
    "questionId": 4,
    "option1": 5,
    "option2": 3,
    "response": "246. \"You should never regret anything in life. If it's good, it's wonderful. If it's bad, it's experience.\" - Victoria Holt"
  },
  {
    "questionId": 5,
    "option1": 5,
    "option2": 3,
    "response": "247. \"Stay hungry, stay foolish.\" - Steve Jobs"
  },
  {
    "questionId": 6,
    "option1": 5,
    "option2": 3,
    "response": "248. \"It's easier to ask forgiveness than it is to get permission.\" - Grace Hopper"
  },
  {
    "questionId": 7,
    "option1": 5,
    "option2": 3,
    "response": "249. \"Do what you love to do and give it your very best.\" - Elon Musk"
  },
  {
    "questionId": 8,
    "option1": 5,
    "option2": 3,
    "response": "250. \"I have not failed. I’ve just found 10,000 ways that won’t work.\" - Thomas Edison"
  },
  {
    "questionId": 9,
    "option1": 5,
    "option2": 3,
    "response": "251. “The entrepreneur always searches for change, responds to it and exploits it as an opportunity.” – Peter Drucker"
  },
  {
    "questionId": 10,
    "option1": 5,
    "option2": 3,
    "response": "252. “Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.” – Albert Schweitzer"
  },
  {
    "questionId": 11,
    "option1": 5,
    "option2": 3,
    "response": "253. “Build your own dreams, or someone else will hire you to build theirs.” – Farrah Gray"
  },
  {
    "questionId": 1,
    "option1": 5,
    "option2": 4,
    "response": "254. “Do what you have to do until you can do what you want to do.” – Oprah Winfrey"
  },
  {
    "questionId": 2,
    "option1": 5,
    "option2": 4,
    "response": "255. “Entrepreneurship is living a few years of your life like most people won't, so that you can spend the rest of your life like most people can't.” – Anonymous"
  },
  {
    "questionId": 3,
    "option1": 5,
    "option2": 4,
    "response": "256. “I never dreamed about success. I worked for it.” – Estée Lauder"
  },
  {
    "questionId": 4,
    "option1": 5,
    "option2": 4,
    "response": "257. “You only have to do a very few things right in your life so long as you don’t do too many things wrong.” – Warren Buffett"
  },
  {
    "questionId": 5,
    "option1": 5,
    "option2": 4,
    "response": "258. “If you’re not stubborn, you’ll give up on experiments too soon. And if you’re not flexible, you’ll pound your head against the wall and you won’t see a different solution to a problem you’re trying to solve.” – Jeff Bezos"
  },
  {
    "questionId": 6,
    "option1": 5,
    "option2": 4,
    "response": "259. “The most difficult thing is the decision to act, the rest is merely tenacity.” – Amelia Earhart"
  },
  {
    "questionId": 7,
    "option1": 5,
    "option2": 4,
    "response": "260. “Don’t be afraid to give up the good to go for the great.” – John D. Rockefeller"
  },
  {
    "questionId": 8,
    "option1": 5,
    "option2": 4,
    "response": "261. “Your most unhappy customers are your greatest source of learning.” – Bill Gates"
  },
  {
    "questionId": 9,
    "option1": 5,
    "option2": 4,
    "response": "262. “Make your life a masterpiece; imagine no limitations on what you can be, have or do.” – Brian Tracy"
  },
  {
    "questionId": 10,
    "option1": 5,
    "option2": 4,
    "response": "263. “I find that the harder I work, the more luck I seem to have.” – Thomas Jefferson"
  },
  {
    "questionId": 11,
    "option1": 5,
    "option2": 4,
    "response": "264. “The way to get started is to quit talking and begin doing.” – Walt Disney"
  },
  {
    "questionId": 1,
    "option1": 5,
    "option2": 5,
    "response": "265. “Done is better than perfect.” – Sheryl Sandberg"
  },
  {
    "questionId": 2,
    "option1": 5,
    "option2": 5,
    "response": "266. “Believe you can and you’re halfway there.” – Theodore Roosevelt"
  },
  {
    "questionId": 3,
    "option1": 5,
    "option2": 5,
    "response": "267. “The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.” – Barack Obama"
  },
  {
    "questionId": 4,
    "option1": 5,
    "option2": 5,
    "response": "268. “Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.” – Steve Jobs"
  },
  {
    "questionId": 5,
    "option1": 5,
    "option2": 5,
    "response": "269. “When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.” – Henry Ford"
  },
  {
    "questionId": 6,
    "option1": 5,
    "option2": 5,
    "response": "270. \"The critical ingredient is getting off your butt and doing something. It's as simple as that.\" - Nolan Bushnell"
  },
  {
    "questionId": 7,
    "option1": 5,
    "option2": 5,
    "response": "271. “The only limit to our realization of tomorrow will be our doubts of today.” – Franklin D. Roosevelt"
  },
  {
    "questionId": 8,
    "option1": 5,
    "option2": 5,
    "response": "272. “I didn’t get there by wishing for it or hoping for it, but by working for it.” – Estée Lauder"
  },
  {
    "questionId": 9,
    "option1": 5,
    "option2": 5,
    "response": "273. “Do not wait; the time will never be ‘just right’. Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along.” – Napoleon Hill"
  },
  {
    "questionId": 10,
    "option1": 5,
    "option2": 5,
    "response": "274. “Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.” – Steve Jobs"
  },
  {
    "questionId": 11,
    "option1": 5,
    "option2": 5,
    "response": "275. “The best way to predict the future is to create it.” – Peter Drucker"
  }
]



const AnswersContext = React.createContext();

const App = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  // const [initialQuestions, setInitialQuestions] = useState(questions);
  const [questions, setQuestions] = useState(initialQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions1, setSelectedOptions1] = useState([]);
  const [selectedOptions2, setSelectedOptions2] = useState([]);
  const questionsPerPage = 1;



  useEffect(() => {
    // Set isVisited to 1 when a question page is visited for the first time
    if (questions[currentQuestionIndex] && questions[currentQuestionIndex].isVisited !== 1) {
      setQuestions((prevQuestions) =>
        prevQuestions.map((question, index) => (index === currentQuestionIndex ? { ...question, isVisited: 1 } : question))
      );
    }
  }, [currentQuestionIndex, questions]);



  const handleOptionChange = (optionId, optionType) => {
    if (optionType === 'options1') {
      const updatedOptions1 = [...selectedOptions1];
      updatedOptions1[currentQuestionIndex] = optionId;
      console.log(updatedOptions1);
      setSelectedOptions1(updatedOptions1);
    } else if (optionType === 'options2') {
      const updatedOptions2 = [...selectedOptions2];
      updatedOptions2[currentQuestionIndex] = optionId;
      setSelectedOptions2(updatedOptions2);
    }
  };

  const isBothOptionsSelected = () => {
    return (
      selectedOptions1[currentQuestionIndex] !== undefined &&
      selectedOptions2[currentQuestionIndex] !== undefined
    );
  };

  // const handleNextButtonClick = () => {
  //   // Check if there are more questions
  //   if (currentQuestionIndex < questions.length - 1) {
  //     setCurrentQuestionIndex(currentQuestionIndex + 1);
  //   }
  //   else if (currentQuestionIndex === questions.length - 1) {
  //     // Handle end of questions/page, e.g., navigate to the next page or finish
  //     console.log('End of questions/page');
  //   }
  // };

  const handleBackButtonClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  }

  const handleFinishButtonClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }

    let answerArray = questions.map((question, index) => {
      const selectedOption1 = selectedOptions1[index] || null;
      const selectedOption2 = selectedOptions2[index] || null;

      const isVisited = index === currentQuestionIndex ? 1 : question.isVisited || 0;
      const delta = selectedOption1 - selectedOption2;

      // Check for overperformance or underperformance when delta is 0
      let performanceStatus = "";
      if (selectedOption1 === selectedOption2) {
        performanceStatus = "Stronger";
      }
      else if (selectedOption2 > selectedOption1) {
        performanceStatus = "Overperformance";
      } else if (selectedOption1 > selectedOption2) {
        performanceStatus = "Underperformance";
      }

      return {
        questionId: question.id,
        option1: selectedOption1,
        option2: selectedOption2,
        isVisited,
        delta,
        performanceStatus,
      };
    });
    setUserAnswers(answerArray);
    console.log("answerArray", answerArray);

    // const output = answerArray.map((answer, index) => {
    //   const matchingResponse = reportResponse.find((response) =>
    //     response.questionId === answer.questionId &&
    //     response.option1 === answer.option1 &&
    //     response.option2 === answer.option2
    //   );


    // return {
    //   questionId: answer.questionId,
    //   // response: matchingResponse ? matchingResponse.response : "",
    //   question: initialQuestions[index].question
    // };

    // });

  };

  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const currentPage = Math.floor(currentQuestionIndex / questionsPerPage) + 1;

  const handlePageChange = (newPage) => {
    const newIndex = (newPage - 1) * questionsPerPage;
    setCurrentQuestionIndex(newIndex);
  };

  const renderPaginationButtons = () => {
    const pageButtons = Array.from({ length: totalPages }, (_, index) => index + 1);
    //  console.log(pageButtons);
    return (
      <div className="flex mt-4">
        {pageButtons.map((page) => {
          let colorCode;
          const isPageVisited = userAnswers[questionsPerPage * (page - 1)]?.isVisited === 1;

          if (page === currentPage) {
            colorCode = "bg-blue-500 text-white";
          } else if (isPageVisited && (userAnswers[questionsPerPage * (page - 1)]?.option1 && userAnswers[questionsPerPage * (page - 1)]?.option2)) {
            colorCode = "bg-green-500 text-white";
          } else if (isPageVisited && (userAnswers[questionsPerPage * (page - 1)]?.option1 || userAnswers[questionsPerPage * (page - 1)]?.option2)) {
            colorCode = "bg-yellow-500 text-white";
          } else if (isPageVisited && !(userAnswers[questionsPerPage * (page - 1)]?.option1 || userAnswers[questionsPerPage * (page - 1)]?.option2)) {
            colorCode = "bg-red-500 text-white";
          } else {
            colorCode = "bg-gray-300 text-gray-700";
          }

          return (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 mx-1 rounded ${colorCode}'
                }`}>
              {page}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <AnswersContext.Provider value={{ userAnswers }}>

      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Questions</h1>

        <div className="mb-4">
          <p className="text-lg">{questions[currentQuestionIndex].question}</p>
        </div>
        <div className='optionConent flex'>
          <div className="mb-8 w-1/2">
            <h1 className="text-xl font-bold mb-2">Importance Score</h1>
            {options1.map((option) => (
              <div key={option.id} className="mb-2">
                <label for={option.name} className="w-1/2 relative flex flex-col bg-white p-5 rounded-lg shadow-md cursor-pointer">
                <span class="font-semibold text-gray-500 leading-tight uppercase mb-3">{option.name}</span>
                  <input
                    type="radio"
                    name={option.name}
                    id={option.name} value="growth"
                    // value={option.id}
                    checked={selectedOptions1[currentQuestionIndex] === option.id}
                    onChange={() => handleOptionChange(option.id, 'options1')}
                    className="h-5 w-5 text-blue-600 absolute h-0 w-0 appearance-none"
                  />
                  <span className="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg"></span>
                </label>
              </div>
            ))}
          </div>

          <div className="mb-8 w-1/2">
            <h1 className="text-xl font-bold mb-2">Performance Score</h1>
            {options2.map((option) => (
              <div key={option.id} className="mb-2">
                <label className="w-1/2 relative flex flex-col bg-white p-5 rounded-lg shadow-md cursor-pointer">
                <span class="font-semibold text-gray-500 leading-tight uppercase mb-3">{option.name}</span>
                  <input
                    type="radio"
                    name={`option-1${option.name}`}
                    id={`option-1${option.name}`} value="growth"
                    // value={option.id}
                    checked={selectedOptions2[currentQuestionIndex] === option.id}
                    onChange={() => handleOptionChange(option.id, 'options2')}
                    className="h-5 w-5 text-blue-600 absolute h-0 w-0 appearance-none"
                  />
                  <span className="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg"></span>
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className='buttonsss flex justify-between'>
        <button
          onClick={handleBackButtonClick}
          disabled={currentQuestionIndex === 0}
          className="bg-gray-500 text-white px-4 py-2 mr-2 rounded">
          Back</button>
        {currentQuestionIndex !== questions.length - 1 && (
          <button onClick={handleFinishButtonClick}
            className={`bg-blue-500 text-white px-4 py-2 mr-2 rounded`}>Next</button>
        )}
        {currentQuestionIndex === questions.length - 1 && (
          <button onClick={handleFinishButtonClick}
            className={`bg-green-500 text-white px-4 py-2 rounded`}>Finish</button>
            
        )}
        </div>
        {renderPaginationButtons()}
        
      </div>

    </AnswersContext.Provider>
  );
};

export default App;
