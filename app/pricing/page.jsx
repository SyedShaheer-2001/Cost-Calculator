'use client';

import { data } from '../data';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Estimate from '../components/Estimate';

export default function ChooseBusiness() {
  const router = useRouter();
  const [category, setCategory] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [lenght, setLenght] = useState(0);
  const [yesNo, setYesNo] = useState([]);
  const [selectedMVP, setSelectedMVP] = useState([]);
  const [selectedAdditional, setSelectedAdditional] = useState([]);
  const[lastscreen, setLastScreen]= useState(true);
  const [design, setDesign]= useState(null);
  const [designHours, setDesignHours] = useState(0);

  
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


  // states and functions for question 2
 

  const toggleFeature = (type, text) => {
  const isMVP = type === 'mvp';
  const stateSetter = isMVP ? setSelectedMVP : setSelectedAdditional;
  const currentState = isMVP ? selectedMVP : selectedAdditional;

  // Clone current set for the current step or initialize a new one
  const updatedSet = new Set(currentState[currentStep] || []);

  if (updatedSet.has(text)) {
    updatedSet.delete(text);
  } else {
    updatedSet.add(text);
  }

  // Create a new object with the updated set for the current step
  const newState = {
    ...currentState,
    [currentStep]: updatedSet,
  };

  stateSetter(newState);
};




  // Back button and states empty

 const handleBack = () => {
  if (currentStep === 0) {
    setCategory('');
    setSelectedPlatform(null);
    return;
  }

  

  // Remove selection for the current step
  const newMVP = { ...selectedMVP };
  const newAdd = { ...selectedAdditional };
  delete newMVP[currentStep];
  delete newAdd[currentStep];

    // Remove yesNo value for the current step
  const newYesNo = [...yesNo];
  newYesNo.splice(currentStep, 1); // Remove the value at currentStep

  setSelectedMVP(newMVP);
  setSelectedAdditional(newAdd);
  setYesNo(newYesNo);
  // Go back to previous step
  setCurrentStep(currentStep - 1);

  if(currentQuestion.id === 'qn'){
    setDesign(null)
    setDesignHours(0)
  }
};


 const handleYesNo = () => {
  // Update Yes/No array (this is fine)
  const updatedYesNo = [...yesNo];
  updatedYesNo[currentStep] = 'no';
  setYesNo(updatedYesNo);

  // Clear selected MVP and Additional features for current step
  const newMVP = { ...selectedMVP, [currentStep]: new Set() };
  const newAdd = { ...selectedAdditional, [currentStep]: new Set() };

  setSelectedMVP(newMVP);
  setSelectedAdditional(newAdd);
};



 // const isDisabled = false

  // const isDisabled = currentStep === 0
  // ? !selectedPlatform
  // : yesNo[currentStep] == null;

  const isDisabled =
  currentStep === 0
    ? !selectedPlatform
    : currentQuestion?.id === 'qn'
      ? design == null
      : yesNo[currentStep] == null;

  console.log('design',design)


  const QuestionStep = ({ step }) => {
  const isYes = yesNo[step] === 'yes';
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-4 mb-4">
        <div
          onClick={() => {
            const copy = [...yesNo];
            copy[step] = 'yes';
            setYesNo(copy);
          }}
          className={clsx(
            'border rounded-[18px] px-6 py-8 flex items-center justify-between cursor-pointer transition',
            yesNo[step] === 'yes' ? 'borderBlue text-white bgBlue' : 'border-[#0000004D]'
          )}
        >
          <span className="text-[23px] font-medium">Yes</span>
        </div>

        <div
          onClick={handleYesNo}
          className={clsx(
            'border rounded-[18px] px-6 py-8 flex items-center justify-between cursor-pointer transition',
            yesNo[step] === 'no' ? 'borderBlue text-white bgBlue' : 'border-[#0000004D]'
          )}
        >
          <span className="text-[23px] font-medium">No</span>
        </div>
      </div>

      {isYes && (
        <div>
          <p className="text-gray-500 text-sm mb-6">Please choose required features below:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* MVP Features */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Enough for MVP</h3>
              <ul className="space-y-3">
                {currentQuestion?.featuresForMVP?.map((feature, index) => (
                  <li key={index} onClick={() => toggleFeature('mvp', feature.text)} className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" checked={selectedMVP[step]?.has(feature.text)} readOnly className="form-checkbox h-5 w-5 textBlue" />
                    <span className="text-[15px]">{feature.text}
                      <span className="text-gray-400 ml-2 text-[14px]">{feature.hours} hours</span>
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
                  <li key={index} onClick={() => toggleFeature('additional', feature.text)} className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" checked={selectedAdditional[step]?.has(feature.text)} readOnly className="form-checkbox h-5 w-5 text-black" />
                    <span className="text-[15px]">{feature.text}
                      <span className="text-gray-400 ml-2 text-[14px]">{feature.hours} hours</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const handleLast = () =>{
  setLastScreen(true)
}

const calculateTotalHours = () => {
  let total = 0;

  questions?.forEach((question, step) => {
    const mvp = selectedMVP[step];
    const add = selectedAdditional[step];

    if (mvp) {
      for (const feature of question.featuresForMVP || []) {
        if (mvp.has(feature.text)) total += feature.hours;
      }
    }

    if (add) {
      for (const feature of question.additionalFeatures || []) {
        if (add.has(feature.text)) total += feature.hours;
      }
    }

    // Add designHours if it's defined and a number
    
  });

  if ( designHours ) {
      total += designHours;
    }
    

  return parseFloat(total.toFixed(2));
};


  const handleabc = () => {
    setYesNo([])
    setCategory('')
    setSelectedPlatform(null)
    setSelectedMVP([])
    setSelectedAdditional([])
    setLastScreen(false)
    setDesign(null)
    setDesignHours(0)
  }

  return (
    <div className="min-h-screen  p-6 md:p-10 max-w-[1460px] mx-auto">

      {lastscreen ? (
        <>
          <div className="flex items-center ">
            <button
              onClick={() => handleabc()}
              className="text-sm text-gray-600 hover:underline flex items-center gap-1"
            >
              <ArrowLeft size={16} />
              Back
            </button>

          </div>
          <Estimate estimate={calculateTotalHours(currentStep)}/>
        </>
      ) : (
        <>
        {!category ? (
        // ======= Category Selection View =======
        <div className='pt-12 max-w-[1190px] mx-auto'>
          <div className="flex items-center mb-8">
            <button
              onClick={() => router.push('/')}
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
                {currentStep > 0 && currentStep <= lenght-2 && (
                  <QuestionStep step={currentStep} />
                )}
                {currentQuestion.id === 'qn' && (
                  <>
                 <div className="grid grid-cols-1 lg:grid-cols-3 xl:gap-16 gap-4 mb-24">
                    {currentQuestion?.options?.map((platform, key) => (
                      <div
                        key={key}
                        onClick={() => {
                          setDesign(platform.text);
                          setDesignHours(platform.hours);
                        }}

                        className={clsx(
                          'border rounded-[18px] px-6 py-8 flex items-center justify-between cursor-pointer transition',
                          selectedPlatform === platform.text
                            ? 'borderBlue'
                            : 'border-[#0000004D]'
                        )}
                      >
                        <span className={`text-[23px] font-medium ${design === platform.text ? 'textBlue' : ''}`}>{platform.text}</span>
                        <span className={`text-[15px] font-medium `}>+{platform.hours}hours</span>
                        <div
                          className={clsx(
                            'w-16 h-16 border rounded-full',
                            design === platform.text
                              ? 'borderBlue bgBlue'
                              : 'border-[#0000004D]'
                          )}
                        />
                      </div>

                    ))}
                  </div>
                </>)}
                
                      <div className="flex justify-end mb-6">
                        <button
                          className={clsx(
                            'px-6 py-3 rounded-full text-white transition',
                            !isDisabled ? 'bgPink cursor-pointer' : 'bgPink cursor-not-allowed'
                          )}
                          disabled={isDisabled}
                          onClick={() => {
                            if (currentStep > questions.length - 2) {
                              handleLast(); // Final action
                            } else {
                              handleNext(); // Proceed to next step
                            }
                          }}
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
              <p className="text-2xl font-bold">{calculateTotalHours(currentStep)}h</p>
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
        </>
      )}

      
    </div>
  );
}
