'use client';

import { data } from '../data';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

const platforms = ['Android', 'iOS', 'Both'];

export default function ChooseBusiness() {
  const router = useRouter();
  const [category, setCategory] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [paging, setPaging] = useState(0);
  const [regselected, setRegSelected] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const handleCategorySelect = (categoryName) => {
    setCategory(categoryName);
    setCurrentStep(0);
    setAnswers({});
    setSelectedFeatures([]);
  };

  const handleYesNo = (id, value) => {
    setAnswers({ ...answers, [id]: value });
  };

  const handleFeatureToggle = (feature) => {
    const exists = selectedFeatures.find((f) => f.text === feature.text);
    if (exists) {
      setSelectedFeatures((prev) =>
        prev.filter((f) => f.text !== feature.text)
      );
    } else {
      setSelectedFeatures((prev) => [...prev, feature]);
    }
  };

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = (current) => {
    if(current === 0){
     setCategory('')
     setSelectedPlatform(null)
    }
    if(current === 1){
     setCurrentStep(0)
     setRegSelected(null)
     setSelectedMVP('')
     setSelectedAdditional('')
    }
    if(current === 2){
     setCurrentStep(1)
    }
    if(current === 3){
     setCurrentStep(2)
    }
    if(current === 4){
     setCurrentStep(3)
    }
    console.log('at the momment',current )
    
  }

  const totalHours = selectedFeatures.reduce((sum, f) => sum + f.hours, 0);
  const questions = data[category];
  useEffect(() => {
    if (category) {
      setCurrentQuestion(questions[currentStep])
    }
  }, [category, currentStep])

  // const currentQuestion = questions[1];

  console.log('questions', questions)
  console.log('current question', currentQuestion)
  console.log('category', category)
  console.log('currentstep', currentStep)
  console.log('selected regestration' ,regselected)


  // states and functions for question 2
  const [selectedMVP, setSelectedMVP] = useState(new Set(null));
  const [selectedAdditional, setSelectedAdditional] = useState(new Set(null));

  const toggleFeature = (type, text) => {
    const updateFn = type === 'mvp' ? setSelectedMVP : setSelectedAdditional;
    const currentSet = type === 'mvp' ? selectedMVP : selectedAdditional;
    const updated = new Set(currentSet);

    if (updated.has(text)) {
      updated.delete(text);
    } else {
      updated.add(text);
    }

    updateFn(updated);
  };
  

  console.log('selectedMVP' , selectedMVP)
  console.log('selectedAdditional', selectedAdditional)




  return (
    <div className="min-h-screen  p-6 md:p-10 max-w-[1460px] mx-auto">
      {!category ? (
        // ======= Category Selection View =======
        <div>
          <div className="flex items-center mb-8">
            <button
              onClick={() => router.back()}
              className="text-sm text-gray-600 hover:underline flex items-center gap-1"
            >
              <ArrowLeft size={16} />
              Back
            </button>
            <h1 className="ml-4 text-xl md:text-2xl font-semibold text-black">
              Choose your Business
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[1190px] mx-auto pt-24">
            {Object.entries(data).map(([categoryName, categoryData]) => (
              <button
                key={categoryName}
                onClick={() => handleCategorySelect(categoryName)}
                className="border border-gray-300 text-gray-700 py-[16px] px-[52px] rounded-[50px] hover:bg-gray-100 transition text-[18px] md:text-base"
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
          <div className="flex-1 bgGray rounded-2xl p-6 ">
            


            <div>
              {currentStep === 0 &&
              <>

              <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => handleBack(currentStep)}
                className="flex items-center text-sm text-gray-500 hover:underline"
              >
                <ArrowLeft size={16} className="mr-1" />
                Back
              </button>
              <span className="text-sm gray-bg text-black px-4 py-2 rounded-full">
                Step {currentStep + 1} of {questions.length}
              </span>
            </div>

            <h2 className="text-2xl font-semibold mb-12">
              {currentQuestion?.title}
            </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 xl:gap-16 gap-4 mb-24">
                  {currentQuestion?.options?.map((platform, key) => (
                    <div
                      key={key}
                      onClick={() => setSelectedPlatform(platform.text)}
                      className={clsx(
                        'border rounded-[18px] px-6 py-8 flex items-center justify-between cursor-pointer transition',
                        selectedPlatform === platform.text
                          ? 'border-blue-500 '
                          : 'border-[#0000004D]'
                      )}
                    >
                      <span className="text-[23px] font-medium">{platform.text}</span>
                      <div
                        className={clsx(
                          'w-16 h-16 border rounded-full',
                          selectedPlatform === platform.text
                            ? 'border-blue-600 bg-blue-600'
                            : 'border-[#0000004D]'
                        )}
                      />
                    </div>

                  ))}
                </div>

              <div className="flex justify-end mb-6">
              <button
                className={clsx(
                  'px-6 py-3 rounded-full text-white transition',
                  selectedPlatform
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-blue-300 cursor-not-allowed'
                )}
                disabled={!selectedPlatform}
                onClick={handleNext}
              >
                Save and continue
              </button>
            </div>
              </>
              }
              {currentStep === 1 &&
                <>
                <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => handleBack(currentStep)}
                className="flex items-center text-sm text-gray-500 hover:underline"
              >
                <ArrowLeft size={16} className="mr-1" />
                Back
              </button>
              <span className="text-sm gray-bg text-black px-4 py-2 rounded-full">
                Step {currentStep + 1} of {questions.length}
              </span>
            </div>

            <h2 className="text-2xl font-semibold mb-12">
              {currentQuestion?.title}
            </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-4 mb-4">
                    {/* Yes Option */}
                    <div
                      onClick={() => setRegSelected('yes')}
                      className={clsx(
                        'border rounded-[18px] px-6 py-8 flex items-center justify-between cursor-pointer transition',
                        regselected === 'yes' ? 'border-blue-500 text-blue-500' : 'border-[#0000004D]'
                      )}
                    >
                      <span className="text-[23px] font-medium">Yes</span>
                    </div>

                    {/* No Option */}
                    <div
                      onClick={() => setRegSelected('no')}
                      className={clsx(
                        'border rounded-[18px] px-6 py-8 flex items-center justify-between cursor-pointer transition',
                        regselected === 'no' ? 'border-blue-500 text-blue-500' : 'border-[#0000004D]'
                      )}
                    >
                      <span className="text-[23px] font-medium">No</span>
                    </div>
                  </div>
                  {regselected === 'yes' ? <>
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
                                  checked={selectedMVP?.has(feature.text)}
                                  readOnly
                                  className="form-checkbox h-5 w-5 text-blue-600"
                                />
                                <span className="text-[15px]">
                                  {feature.text}
                                  <span className="text-gray-400 ml-2">
                                    {feature.hours ?? feature.hour} hours
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
                                  checked={selectedAdditional?.has(feature.text)}
                                  readOnly
                                  className="form-checkbox h-5 w-5 text-blue-600"
                                />
                                <span className="text-[15px]">
                                  {feature.text}
                                  <span className="text-gray-400 ml-2">{feature.hours} hours</span>
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </> : 
                  <>
                  </> 
                  }
                  <div className="flex justify-end mb-6">
              <button
                className={clsx(
                  'px-6 py-3 rounded-full text-white transition',
                  regselected
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-blue-300 cursor-not-allowed'
                )}
                disabled={!regselected}
                onClick={handleNext}
              >
                Save and continue
              </button>
            </div>
                </>
              }
              {currentStep === 2 &&
              <>
              <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => handleBack(currentStep)}
                className="flex items-center text-sm text-gray-500 hover:underline"
              >
                <ArrowLeft size={16} className="mr-1" />
                Back
              </button>
              <span className="text-sm gray-bg text-black px-4 py-2 rounded-full">
                Step {currentStep + 1} of {questions.length}
              </span>
            </div>

            <h2 className="text-2xl font-semibold mb-12">
              {currentQuestion?.title}
            </h2>
                <div>Nice to meet you</div>
              </>
              
              }
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
            <div className="bg-[#949CA8] text-white rounded-[18px] p-8">
              <p className="text-sm">Summary time</p>
              <p className="text-2xl font-bold">0h</p>
            </div>
            <div className="bgGray rounded-[18px] p-8">
              <p className="text-sm text-gray-600">Development time</p>
              <p className="text-xl font-semibold">0h</p>
            </div>
            <div className="bgGray rounded-[18px] p-8">
              <p className="text-sm text-gray-600">Non-dev time</p>
              <p className="text-xl font-semibold">0h</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
