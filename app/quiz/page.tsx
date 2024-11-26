'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { X, ChevronRight, SkipForward, CheckCircle2, XCircle, Lightbulb, Flag, ArrowRight } from 'lucide-react'
import { cn } from "@/lib/utils"
import Link from 'next/link'

type Exercise = {
  type: 'translation' | 'multiple-choice' | 'match'
  phrase: string
  words?: string[]
  options?: string[]
  matches?: { left: string; right: string }[]
  correctAnswer: string
}

export default function GermanExercise() {
  const [selectedWords, setSelectedWords] = useState<string[]>([])
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [matchPairs, setMatchPairs] = useState<{ [key: string]: string }>({})
  const [progress, setProgress] = useState(0)
  const [currentExercise, setCurrentExercise] = useState(0)
  const [score, setScore] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const exercises: Exercise[] = [
    {
      type: 'translation',
      phrase: "acht Kilo Tomaten",
      words: ["tomatoes", "the", "eight", "delicious", "of", "zero", "nine", "kilograms"],
      correctAnswer: "eight kilograms tomatoes"
    },
    {
      type: 'multiple-choice',
      phrase: "Was bedeutet 'der Hund'?",
      options: ["The cat", "The dog", "The bird", "The fish"],
      correctAnswer: "The dog"
    },
    {
      type: 'translation',
      phrase: "der rote Apfel",
      words: ["the", "red", "apple", "green", "blue", "pear", "orange", "banana"],
      correctAnswer: "the red apple"
    },
    {
      type: 'match',
      phrase: "Match the German words with their English translations",
      matches: [
        { left: "Haus", right: "House" },
        { left: "Katze", right: "Cat" },
        { left: "Baum", right: "Tree" },
        { left: "Sonne", right: "Sun" }
      ],
      correctAnswer: "Haus:House,Katze:Cat,Baum:Tree,Sonne:Sun"
    },
    {
      type: 'multiple-choice',
      phrase: "Wie sagt man 'goodbye' auf Deutsch?",
      options: ["Hallo", "Danke", "Bitte", "Auf Wiedersehen"],
      correctAnswer: "Auf Wiedersehen"
    },
    {
      type: 'translation',
      phrase: "drei große Hunde",
      words: ["three", "big", "dogs", "cats", "small", "two", "birds", "fish"],
      correctAnswer: "three big dogs"
    },
    {
      type: 'multiple-choice',
      phrase: "Was ist die Farbe einer Zitrone?",
      options: ["Rot", "Blau", "Gelb", "Grün"],
      correctAnswer: "Gelb"
    },
    {
      type: 'match',
      phrase: "Match the numbers",
      matches: [
        { left: "eins", right: "one" },
        { left: "zwei", right: "two" },
        { left: "drei", right: "three" },
        { left: "vier", right: "four" }
      ],
      correctAnswer: "eins:one,zwei:two,drei:three,vier:four"
    }
  ]

  useEffect(() => {
    setProgress((currentExercise / exercises.length) * 100)
  }, [currentExercise])

  const handleWordClick = (word: string) => {
    setSelectedWords([...selectedWords, word])
  }

  const handleRemoveWord = (index: number) => {
    setSelectedWords(selectedWords.filter((_, i) => i !== index))
  }

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
  }

  const handleMatchPair = (left: string, right: string) => {
    setMatchPairs({ ...matchPairs, [left]: right })
  }

  const handleSkip = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1)
      setSelectedWords([])
      setSelectedOption(null)
      setMatchPairs({})
      setShowFeedback(false)
    } else {
      setIsFinished(true)
    }
  }

  const handleCheck = () => {
    const currentEx = exercises[currentExercise]
    let userAnswer: string
    let correct: boolean

    if (currentEx.type === 'translation') {
      userAnswer = selectedWords.join(" ")
      correct = userAnswer === currentEx.correctAnswer
    } else if (currentEx.type === 'multiple-choice') {
      userAnswer = selectedOption || ''
      correct = userAnswer === currentEx.correctAnswer
    } else if (currentEx.type === 'match') {
      userAnswer = Object.entries(matchPairs).map(([left, right]) => `${left}:${right}`).join(',')
      correct = userAnswer === currentEx.correctAnswer
    } else {
      userAnswer = ''
      correct = false
    }

    setIsCorrect(correct)
    setShowFeedback(true)
    if (correct) {
      setScore(score + 1)
    }
    setTimeout(() => {
      handleSkip()
    }, 2000)
  }

  const handleRestart = () => {
    setCurrentExercise(0)
    setSelectedWords([])
    setSelectedOption(null)
    setMatchPairs({})
    setScore(0)
    setIsFinished(false)
    setProgress(0)
    setShowFeedback(false)
  }

  if (isFinished) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-4">
        <Card className="w-full max-w-2xl shadow-lg">
          <CardContent className="p-8 text-center">
            <motion.h1 
              className="text-4xl font-bold mb-8 text-gray-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Exercise Completed!
            </motion.h1>
            <motion.div 
              className="text-6xl mb-8 font-bold"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              {score === exercises.length ? (
                <span className="text-green-500">Perfect Score!</span>
              ) : (
                <span className="text-blue-600">{score} / {exercises.length}</span>
              )}
            </motion.div>
            <motion.p 
              className="text-xl mb-8 text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {score === exercises.length
                ? "Congratulations! You've mastered these exercises!"
                : "Great effort! Keep practicing to improve your score."}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className='space-x-3'>
              <Button 
                size="lg"
                onClick={handleRestart}
                className="text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
              >
                Try Again
              </Button>
              <Link href="/">
              <Button 
                size="lg"
                className="text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
              >
                Home
              </Button>
              </Link>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const currentEx = exercises[currentExercise]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-4">
      <Card className="w-full max-w-3xl shadow-lg">
        <CardContent className="p-8">
          {/* Header */}
          <motion.div 
            className="flex justify-between items-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center">
              <Flag className="w-6 h-6 text-blue-600 mr-2" />
              <span className="text-lg font-semibold text-gray-700">German Exercise</span>
            </div>
            <div className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-500" />
              <span className="text-lg font-semibold text-gray-700">{score}/{currentExercise + 1}</span>
            </div>
          </motion.div>

          {/* Progress Bar */}
          <motion.div 
            className="mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Progress value={progress} className="h-3" />
          </motion.div>

          {/* Question */}
          <motion.h1 
            className="text-3xl font-bold text-center mb-8 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {currentEx.type === 'translation' ? 'Translate to English' : 
             currentEx.type === 'multiple-choice' ? 'Choose the correct answer' :
             'Match the following'}
          </motion.h1>

          {/* German Phrase */}
          <motion.div 
            className="text-2xl text-center mb-8 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg py-4 px-6 shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {currentEx.phrase}
          </motion.div>

          {currentEx.type === 'translation' && (
            <>
              {/* Answer Area for Translation */}
              <Card className="mb-8 border-2 border-blue-200 shadow-inner">
                <CardContent className="p-4 min-h-[100px]">
                  <div className="flex flex-wrap gap-2">
                    <AnimatePresence>
                      {selectedWords.map((word, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md flex items-center gap-2 shadow-sm"
                        >
                          {word}
                          <button onClick={() => handleRemoveWord(index)} className="text-blue-600 hover:text-blue-800 transition-colors">
                            <X className="w-4 h-4" />
                          </button>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </CardContent>
              </Card>

              {/* Word Bank */}
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {currentEx.words?.map((word, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleWordClick(word)}
                    className={cn(
                      "px-4 py-2 rounded-md transition-all duration-200 text-lg font-medium",
                      "bg-white text-blue-600 hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-400",
                      "disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200 shadow-sm",
                      "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    )}
                    disabled={selectedWords.includes(word)}
                  >
                    {word}
                  </motion.button>
                ))}
              </div>
            </>
          )}

          {currentEx.type === 'multiple-choice' && (
            // Multiple Choice Options
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {currentEx.options?.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Button
                    variant={selectedOption === option ? "default" : "outline"}
                    className={cn(
                      "w-full text-lg py-6 transition-all duration-200",
                      selectedOption === option ? 'bg-blue-600 text-white' : 'text-blue-600',
                      "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    )}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </Button>
                </motion.div>
              ))}
            </div>
          )}

          {currentEx.type === 'match' && (
            // Match the following
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="space-y-4">
                {currentEx.matches?.map(({ left },
index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-between",
                        matchPairs[left] ? 'bg-green-100 text-green-800' : 'text-blue-600'
                      )}
                      onClick={() => handleMatchPair(left, '')}
                    >
                      {left}
                      {matchPairs[left] && <ArrowRight className="ml-2" />}
                    </Button>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-4">
                {currentEx.matches?.map(({ right }, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full",
                        Object.values(matchPairs).includes(right) ? 'bg-green-100 text-green-800' : 'text-blue-600'
                      )}
                      onClick={() => {
                        const unpairedLeft = Object.keys(matchPairs).find(key => matchPairs[key] === '');
                        if (unpairedLeft) {
                          handleMatchPair(unpairedLeft, right);
                        }
                      }}
                    >
                      {right}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Feedback */}
          <AnimatePresence>
            {showFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "text-center mb-6 p-4 rounded-lg",
                  isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                )}
              >
                {isCorrect ? (
                  <div className="flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 mr-2" />
                    <span>Correct! Great job!</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <XCircle className="w-6 h-6 mr-2" />
                    <span>Not quite. The correct answer is: {currentEx.correctAnswer}</span>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Buttons */}
          <motion.div 
            className="flex justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button
              variant="outline"
              size="lg"
              onClick={handleSkip}
              className={cn(
                "text-lg text-blue-600 border-blue-600 hover:bg-blue-50 transition-colors duration-200",
                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              )}
            >
              <SkipForward className="mr-2 h-5 w-5" />
              Skip
            </Button>
            <Button
              size="lg"
              disabled={(currentEx.type === 'translation' && selectedWords.length === 0) || 
                        (currentEx.type === 'multiple-choice' && selectedOption === null) ||
                        (currentEx.type === 'match' && Object.values(matchPairs).some(v => v === ''))}
              onClick={handleCheck}
              className={cn(
                "text-lg bg-green-600 hover:bg-green-700 text-white transition-colors duration-200",
                "focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              )}
            >
              Check
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  )
}

