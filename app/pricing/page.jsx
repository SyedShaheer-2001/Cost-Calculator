'use client';

import { data } from '../data';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

export default function ChooseBusiness() {
  const router = useRouter();
  const [category, setCategory] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [yesNo1, setyesNo1] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [yesNo2, setyesNo2] = useState(null);
  const [yesNo3, setyesNo3] = useState(null);
  const [lenght, setLenght] = useState(0);

  
  


  const handleCategorySelect = (categoryName) => {
    setCategory(categoryName);
    setCurrentStep(0);
  };

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const questions = data[category];

  useEffect(() => {
    if (category) {
      setCurrentQuestion(questions[currentStep])
      setLenght(questions.length)
    }
  }, [category, currentStep])

  console.log('lenght', lenght)

  // states and functions for question 2
  const [selectedMVP1, setselectedMVP1] = useState(new Set(null));
  const [selectedAdditional1, setselectedAdditional1] = useState(new Set(null));

  const toggleFeature = (type, text) => {
    if (currentStep === 1) {
      const updateFn = type === 'mvp' ? setselectedMVP1 : setselectedAdditional1;
      const currentSet = type === 'mvp' ? selectedMVP1 : selectedAdditional1;
      const updated = new Set(currentSet);

      if (updated.has(text)) {
        updated.delete(text);
      } else {
        updated.add(text);
      }
      updateFn(updated);
    }

    if (currentStep === 2) {
      const updateFn = type === 'mvp' ? setselectedMVP2 : setselectedAdditional2;
      const currentSet = type === 'mvp' ? selectedMVP2 : selectedAdditional2;
      const updated = new Set(currentSet);

      if (updated.has(text)) {
        updated.delete(text);
      } else {
        updated.add(text);
      }

      updateFn(updated);
    }
  };

  // states and functions for question 3
  const [selectedMVP2, setselectedMVP2] = useState(new Set(null));
  const [selectedAdditional2, setselectedAdditional2] = useState(new Set(null));

  //question 4
   const [selectedMVP3, setselectedMVP3] = useState(new Set(null));
  const [selectedAdditional3, setselectedAdditional3] = useState(new Set(null));

  // total hours
  function calculateTotalHours({
    category,
    selectedPlatform,
    selectedMVP1,
    selectedAdditional1,
    yesNo1,
    selectedMVP2,
    selectedAdditional2,
    yesNo2,
    selectedMVP3,
    selectedAdditional3,
    yesNo3,

  }) {
    const categoryData = data[category];
    let total = 0;

    for (let i = 0; i < categoryData?.length; i++) {
      const question = categoryData[i];

      // if (question.id === 'q0') {
      //   // Step 1: Platform
      //   const selected = question?.options.find(opt => opt.text === selectedPlatform);
      //   if (selected) total += selected.hours;
      // }

      if (question.id === 'q1') {
        // Step 2: Registration & Authorization
        if (yesNo1 === 'yes') {
          question.featuresForMVP.forEach(f => {
            if (selectedMVP1?.has(f.text)) total += f.hours;
          });
          question.additionalFeatures.forEach(f => {
            if (selectedAdditional1?.has(f.text)) total += f.hours;
          });
        }
      }

      if (question?.id === 'q2' && question?.title.includes('Profile')) {
        // Step 3: Profile
        if (yesNo2 === 'yes') {
          question.featuresForMVP.forEach(f => {
            if (selectedMVP2?.has(f.text)) total += f.hours;
          });
          question.additionalFeatures.forEach(f => {
            if (selectedAdditional2?.has(f.text)) total += f.hours;
          });
        }
      }

      if (
        question.id.startsWith('q') &&
        question.id !== 'q0' &&
        question.id !== 'q1' &&
        !(question.title.includes('Profile')) &&
        question.featuresForMVP &&
        question.additionalFeatures
      ) {
        // Optional: Extend here for other features like Chats, Calls, etc.
        // Add logic if you have selections stored for those questions
      }
    }

    return total;
  }
  const totalHours = Number(
    calculateTotalHours({
      category,
      selectedPlatform,
      selectedMVP1,
      selectedAdditional1,
      yesNo1,
      selectedMVP2,
      selectedAdditional2,
      yesNo2,
      selectedMVP3,
      selectedAdditional3,
      yesNo3,
    }).toFixed(2)
  );
  console.log('total', totalHours)



  // Back button and states empty

  const handleBack = () => {
    if (currentStep === 0) {
      setCategory('')
      setSelectedPlatform(null)
    }
    if (currentStep === 1) {
      setCurrentStep(0)
      setyesNo1(null)
      setselectedMVP1()
      setselectedAdditional1()
    }
    if (currentStep === 2) {
      setCurrentStep(1)
      setyesNo2(null)
      setselectedMVP2()
      setselectedAdditional2()
    }
    if (currentStep === 3) {
      setCurrentStep(2)
      setselectedMVP3()
      setselectedAdditional3()
    }
    if (currentStep === 4) {
      setCurrentStep(3)
    }
  }

  const handleYesNo = () => {
    if (currentStep === 1) {
      setyesNo1('no')
      setselectedMVP1()
      setselectedAdditional1()
    }
    if (currentStep === 2) {
      setyesNo2('no')
      setselectedMVP2()
      setselectedAdditional2()
    }
    if (currentStep === 2) {
      setyesNo2('no')
      setselectedMVP3()
      setselectedAdditional3()
    }
  }

  const stepConditions = {
  0: selectedPlatform,
  1: yesNo1,
  2: yesNo2,
  3: yesNo3,
  // 4: yesNo4,
  // 5: yesNo5,
  // 6: yesNo6,
  // 7: yesNo7,
  // 8: yesNo8,
  // 9: yesNo9,
  // 10: yesNo10,
  // 11: yesNo11,
  // 12: yesNo12,
  // 13: yesNo13,
  // 14: yesNo14,
  // 15: yesNo15,
  // 16: yesNo16,
  // 17: yesNo17,
  // 18: yesNo18,
};

const isDisabled = currentStep in stepConditions && !stepConditions[currentStep];


  return (
    <div className="min-h-screen  p-6 md:p-10 max-w-[1460px] mx-auto">

      {!category ? (
        // ======= Category Selection View =======
        <div className='pt-12 max-w-[1190px] mx-auto'>
          <div className="flex items-center mb-8">
            <button
              onClick={() => router.back()}
              className="text-sm text-gray-600 hover:underline flex items-center gap-1"
            >
              <ArrowLeft size={16} />
              Back
            </button>

          </div>
          <h1 className=" text-xl md:text-2xl font-semibold text-black">
            Choose your Business
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  pt-16 ">

            {Object.entries(data).map(([categoryName, categoryData]) => (
              <button
                key={categoryName}
                onClick={() => handleCategorySelect(categoryName)}
                className="cursor-pointer border border-gray-300 text-gray-700 py-[16px] px-[52px] rounded-[50px] hover:bg-[#174273] hover:text-white transition text-[18px] md:text-base"
              >
                {categoryName}
              </button>
            ))
            }
          </div>
        </div>
      ) : (
        // ======= Step One: Platform Selection =======
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Section */}
          <div className="flex-1 bgGray rounded-2xl p-6 shadow-md">
            <div>
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={() => handleBack()}
                  className="flex items-center text-sm text-gray-500 hover:underline"
                >
                  <ArrowLeft size={16} className="mr-1" />
                  Back
                </button>
                <span className="text-sm bg-[#F28F20]/80 text-white px-4 py-2 rounded-full">
                  Step {currentStep + 1} of {questions.length}
                </span>
              </div>

              <h2 className="text-2xl font-semibold mb-12">
                {currentQuestion?.title}
              </h2>
              {currentStep === 0 &&
                <>
                  <div className="grid grid-cols-1 lg:grid-cols-3 xl:gap-16 gap-4 mb-24">
                    {currentQuestion?.options?.map((platform, key) => (
                      <div
                        key={key}
                        onClick={() => setSelectedPlatform(platform.text)}
                        className={clsx(
                          'border rounded-[18px] px-6 py-8 flex items-center justify-between cursor-pointer transition',
                          selectedPlatform === platform.text
                            ? 'borderBlue'
                            : 'border-[#0000004D]'
                        )}
                      >
                        <span className={`text-[23px] font-medium ${selectedPlatform === platform.text ? 'textBlue' : ''}`}>{platform.text}</span>
                        <div
                          className={clsx(
                            'w-16 h-16 border rounded-full',
                            selectedPlatform === platform.text
                              ? 'borderBlue bgBlue'
                              : 'border-[#0000004D]'
                          )}
                        />
                      </div>

                    ))}
                  </div>

                </>
              }
              {currentStep === 1 &&
                <>
                  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-4 mb-4">
                    {/* Yes Option */}
                    <div
                      onClick={() => setyesNo1('yes')}
                      className={clsx(
                        'border rounded-[18px] px-6 py-8 flex items-center justify-between cursor-pointer transition',
                        yesNo1 === 'yes' ? 'borderBlue text-white bgBlue' : 'border-[#0000004D]'
                      )}
                    >
                      <span className="text-[23px] font-medium">Yes</span>
                    </div>

                    {/* No Option */}
                    <div
                      onClick={() => handleYesNo()}
                      className={clsx(
                        'border rounded-[18px] px-6 py-8 flex items-center justify-between cursor-pointer transition',
                        yesNo1 === 'no' ? 'borderBlue text-white bgBlue' : 'border-[#0000004D]'
                      )}
                    >
                      <span className="text-[23px] font-medium">No</span>
                    </div>
                  </div>
                  {yesNo1 === 'yes'  &&
                  <>
                    <div className="">
                      <p className="text-gray-500 text-sm mb-6">Please choose required features below:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* MVP Features */}
                        <div>
                          <h3 className="font-semibold text-lg mb-4">Enough for MVP</h3>
                          <ul className="space-y-3">
                            {currentQuestion?.featuresForMVP?.map((feature, index) => (
                              <li
                                key={index}
                                className="flex items-center space-x-3 cursor-pointer"
                                onClick={() => toggleFeature('mvp', feature.text)}
                              >
                                <input
                                  type="checkbox"
                                  checked={Boolean(selectedMVP1?.has(feature.text))}
                                  readOnly
                                  className="form-checkbox h-5 w-5 textBlue"
                                />
                                <span className="text-[15px]">
                                  {feature.text}
                                  <span className="text-gray-400 ml-2 text-[14px]">
                                    {feature.hours} hours
                                  </span>
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Additional Features */}
                        <div>
                          <h3 className="font-semibold text-lg mb-4">Additional Features</h3>
                          <ul className="space-y-3">
                            {currentQuestion?.additionalFeatures?.map((feature, index) => (
                              <li
                                key={index}
                                className="flex items-center space-x-3 cursor-pointer"
                                onClick={() => toggleFeature('additional', feature.text)}
                              >
                                <input
                                  type="checkbox"
                                  checked={Boolean(selectedAdditional1?.has(feature.text))}
                                  readOnly
                                  className="form-checkbox h-5 w-5 text-black"
                                />
                                <span className="text-[15px]">
                                  {feature.text}
                                  <span className="text-gray-400 ml-2 text-[14px]">{feature.hours} hours</span>
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </> 
                  }
                </>
              }
              {currentStep === 2 &&
                <>
                  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-4 mb-4">
                    {/* Yes Option */}
                    <div
                      onClick={() => setyesNo2('yes')}
                      className={clsx(
                        'border rounded-[18px] px-6 py-8 flex items-center justify-between cursor-pointer transition',
                        yesNo2 === 'yes' ? 'borderBlue text-white bgBlue' : 'border-[#0000004D]'
                      )}
                    >
                      <span className="text-[23px] font-medium">Yes</span>
                    </div>

                    {/* No Option */}
                    <div
                      onClick={() => handleYesNo()}
                      className={clsx(
                        'border rounded-[18px] px-6 py-8 flex items-center justify-between cursor-pointer transition',
                        yesNo2 === 'no' ? 'borderBlue text-white bgBlue' : 'border-[#0000004D]'
                      )}
                    >
                      <span className="text-[23px] font-medium">No</span>
                    </div>
                  </div>

                  {yesNo2 === 'yes' && 
                  <>
                    <div className="">
                      <p className="text-gray-500 text-sm mb-6">Please choose required features below:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* MVP Features */}
                        <div>
                          <h3 className="font-semibold text-lg mb-4">Enough for MVP</h3>
                          <ul className="space-y-3">
                            {currentQuestion?.featuresForMVP?.map((feature, index) => (
                              <li
                                key={index}
                                className="flex items-center space-x-3 cursor-pointer"
                                onClick={() => toggleFeature('mvp', feature.text)}
                              >
                                <input
                                  type="checkbox"
                                  checked={Boolean(selectedMVP2?.has(feature.text))}
                                  readOnly
                                  className="form-checkbox h-5 w-5 textBlue"
                                />
                                <span className="text-[15px]">
                                  {feature.text}
                                  <span className="text-gray-400 ml-2 text-[14px]">
                                    {feature.hours} hours
                                  </span>
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Additional Features */}
                        <div>
                          <h3 className="font-semibold text-lg mb-4">Additional Features</h3>
                          <ul className="space-y-3">
                            {currentQuestion?.additionalFeatures?.map((feature, index) => (
                              <li
                                key={index}
                                className="flex items-center space-x-3 cursor-pointer"
                                onClick={() => toggleFeature('additional', feature.text)}
                              >
                                <input
                                  type="checkbox"
                                  checked={Boolean(selectedAdditional2?.has(feature.text))}
                                  readOnly
                                  className="form-checkbox h-5 w-5 text-black"
                                />
                                <span className="text-[15px]">
                                  {feature.text}
                                  <span className="text-gray-400 ml-2 text-[14px]">{feature.hours} hours</span>
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </> 
                  }
                </>
              }

              {currentStep === 3 &&
                <>

                </>
              }

                <div className="flex justify-end mb-6">
                  <button
                    className={clsx(
                      'px-6 py-3 rounded-full text-white transition',
                      !isDisabled ? 'bgPink cursor-pointer' : 'bgPink cursor-not-allowed'
                    )}
                    disabled={isDisabled}
                    onClick={handleNext}
                  >
                    Save and continue
                  </button>
                </div>

            </div>
            <hr className="mb-4 gray-text" />
            <div className="flex gap-4 text-sm text-gray-600">
              <div>
                <strong>Platform:</strong>{' '}
                <span>{selectedPlatform || 'Not selected'}</span>
              </div>
              <div>
                <strong>Features:</strong> <span>Not selected</span>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="flex flex-col gap-4 w-full lg:w-[220px]">
            <div className="bgBlue text-white rounded-[18px] p-8 shadow-md">
              <p className="text-sm">Summary time</p>
              <p className="text-2xl font-bold">{totalHours} h</p>
            </div>
            <div className="bgGray rounded-[18px] p-8 shadow-md">
              <p className="text-sm text-gray-600">Development time</p>
              <p className="text-xl font-semibold">0h</p>
            </div>
            <div className="bgGray rounded-[18px] p-8 shadow-md">
              <p className="text-sm text-gray-600">Non-dev time</p>
              <p className="text-xl font-semibold">0h</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
