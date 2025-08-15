'use client';

import clsx from 'clsx';

export default function FeatureSelectionStep({
  step,
  currentQuestion,
  yesNo,
  setYesNo,
  selectedMVP,
  setSelectedMVP,
  selectedPlatform,
  selectedAdditional,
  setSelectedAdditional,
}) {
  const isYes = yesNo[step] === 'yes';

  const toggleFeature = (type, text) => {
    const isMVP = type === 'mvp';
    const stateSetter = isMVP ? setSelectedMVP : setSelectedAdditional;
    const currentState = isMVP ? selectedMVP : selectedAdditional;

    const firstFeature = currentQuestion?.featuresForMVP?.[0]?.text;
    if (isMVP && text === firstFeature) return;

    const updatedSet = new Set(currentState[step] || []);
    updatedSet.has(text) ? updatedSet.delete(text) : updatedSet.add(text);

    const newState = { ...currentState, [step]: updatedSet };
    stateSetter(newState);
  };

  const handleYesClick = () => {
    const copy = [...yesNo];
    copy[step] = 'yes';
    setYesNo(copy);

    const mvpFeatures = currentQuestion?.featuresForMVP?.map(f => f.text) || [];

    if (mvpFeatures.length > 0) {
      const allFeatures = new Set(mvpFeatures);
      setSelectedMVP(prev => ({ ...prev, [step]: allFeatures }));
    }
  };

  const handleNoClick = () => {
    const copy = [...yesNo];
    copy[step] = 'no';
    setYesNo(copy);

    setSelectedMVP(prev => ({ ...prev, [step]: new Set() }));
    setSelectedAdditional(prev => ({ ...prev, [step]: new Set() }));
  };

 
function getMVPFeatureHours(question) {
  if (!question?.featuresForMVP) return 0;

  let total = 0;

  if (selectedPlatform === 'Android') {
    total = question.featuresForMVP.reduce((sum, feature) => sum + (feature.AndroidHours || 0), 0);
  } else if (selectedPlatform === 'IOS') {
    total = question.featuresForMVP.reduce((sum, feature) => sum + (feature.IOSHours || 0), 0);
  } else if (selectedPlatform === 'Both') {
    total = question.featuresForMVP.reduce((sum, feature) => sum + (feature.BothHours || 0), 0);
  }

  return parseFloat(total.toFixed(1)); // rounds to 1 decimal place
}



  return (
    <>
      {/* Yes/No Choice */}
      {yesNo[step] !== 'yes'  &&
      <div className="grid grid-cols-2 lg:grid-cols-2 lg:gap-16 gap-4 mb-32">
        <div
          onClick={handleNoClick}
          className={clsx(
            'border rounded-[18px] sm:px-6 sm:py-8 px-2 py-3 flex items-center sm:justify-between justify-center cursor-pointer transition hover:border-[#174273]',
            yesNo[step] === 'no' ? 'borderBlue text-white bgBlue' : 'border-[#0000004D]'
          )}
        >
          <span className="text-[18px] sm:text-[23px] font-medium">No</span>
        </div>

          <div
            onClick={handleYesClick}
            className={clsx(
              'border rounded-[18px] sm:px-6 sm:py-8 px-2 py-3 flex items-center sm:justify-between justify-center cursor-pointer transition hover:border-[#174273]',
              yesNo[step] === 'yes' ? 'borderBlue text-white bgBlue' : 'border-[#0000004D]'
            )}
          >
            <span className="text-[18px] sm:text-[23px] font-medium">
              Yes
              
            </span>
            <span className="mr-4 text-sm sm:text-[16px] font-normal text-gray-400">
                + {getMVPFeatureHours(currentQuestion)}h
              </span>
          </div>

      </div>

      }
      

      {/* Feature Selection */}
      {isYes && (
        <div>
          <p className="text-gray-500 text-sm lg:text-xl sm:mb-6 mb-4">Please choose required features below:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-h-44 overflow-y-auto min-h-42">
            {/* MVP Features */}
            <div>
              <h3 className="font-semibold text-[16px] sm:text-lg lg:text-xl mb-4">Enough for MVP</h3>
              <ul className="space-y-3">
                {currentQuestion?.featuresForMVP?.map((feature, index) => {
                  const isFirst = index === 0;
                  const isChecked = selectedMVP[step]?.has(feature.text);
                  return (
                    <li
                      key={index}
                      onClick={() => !isFirst && toggleFeature('mvp', feature.text)}
                      className="flex items-center space-x-3 cursor-pointer"
                    >
                      <div
                        className={clsx(
                          'w-4 h-4 sm:w-5 sm:h-5 rounded border-2 flex items-center justify-center text-white text-[10px] font-bold',
                          isFirst
                            ? 'bg-gray-400 border-gray-400'
                            : isChecked
                            ? 'bgBlue borderBlue'
                            : 'border-[#0000004D]'
                        )}
                      >
                        {isChecked && <span>✔</span>}
                      </div>
                      <span className="text-[12px] sm:text-[15px] lg:text-[18px]">
                        {feature.text}
                        <span className="text-gray-400 sm:ml-2 ml-[3px] text-[10px] sm:text-[14px] lg:text-[16px]">
                          {selectedPlatform === 'Android' && feature.AndroidHours}
                          {selectedPlatform === 'IOS' && feature.IOSHours}
                          {selectedPlatform === 'Both' && feature.BothHours} hours
                        </span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Additional Features */}
            {currentQuestion?.additionalFeatures?.length > 0 && (
              <div>
                <h3 className="font-semibold text-[16px] sm:text-lg lg:text-xl mb-4">Additional Features</h3>
                <ul className="space-y-3">
                  {currentQuestion.additionalFeatures.map((feature, index) => (
                    <li
                      key={index}
                      onClick={() => toggleFeature('additional', feature.text)}
                      className="flex items-center space-x-3 cursor-pointer"
                    >
                      <div
                        className={clsx(
                          'w-4 h-4 sm:w-5 sm:h-5 rounded border-2 flex items-center justify-center text-white text-[10px] font-bold',
                          selectedAdditional[step]?.has(feature.text)
                            ? 'bgBlue borderBlue'
                            : 'border-[#0000004D]'
                        )}
                      >
                        {selectedAdditional[step]?.has(feature.text) && <span>✔</span>}
                      </div>
                      <span className="text-[12px] sm:text-[15px] lg:text-[18px]">
                        {feature.text}
                        <span className="text-gray-400 sm:ml-2 ml-[3px] text-[10px] sm:text-[14px] lg:text-[16px]">
                          {selectedPlatform === 'Android' && feature.AndroidHours}
                          {selectedPlatform === 'IOS' && feature.IOSHours}
                          {selectedPlatform === 'Both' && feature.BothHours} hours
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
