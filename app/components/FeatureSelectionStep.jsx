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
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-4 mb-[44px] sm:mb-[106px] lg:mb-[143px]">
        <div
          onClick={handleNoClick}
          className={clsx(
            'border rounded-[18px] sm:px-6 sm:py-8 px-6 py-8 flex items-center justify-between  cursor-pointer transition gradient-border',
            yesNo[step] === 'no' ? ' bg-gradient border-[#000] ' : 'border-[#0000004D]'
          )}
        >
          <span className="text-[18px] sm:text-[23px] font-medium">No</span>
        </div>

          <div
            onClick={handleYesClick}
            className={clsx(
              'border rounded-[18px] sm:px-6 sm:py-8 px-6 py-8 flex items-center justify-between cursor-pointer transition gradient-border',
              yesNo[step] === 'yes' ? ' text-white bg-white' : 'border-[#0000004D]'
            )}
          >
            <span className="text-[18px] sm:text-[23px] font-medium">
              Yes
              
            </span>
            <span className="mr-4 text-sm sm:text-[16px] font-normal ">
                + {getMVPFeatureHours(currentQuestion)}h
              </span>
          </div>

      </div>

      }
      

      {/* Feature Selection */}
      {isYes && (
        <div>
          <p className="text-white text-sm lg:text-xl sm:mb-4 mb-4 font-medium">Please choose required features below:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8  overflow-y-auto custom-scrollbar min-h-[194px] max-h-[194px] md:min-h-[273px] md:max-h-[273px] lg:min-h-[183px] lg:max-h-[183px]">
            {/* MVP Features */}
            <div>
              <h3 className="font-semibold text-[16px] lg:text-[17px] mb-4 font-medium">Enough for MVP</h3>
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
                          'w-4 h-4  rounded border-2 flex items-center justify-center text-white text-[10px] font-bold',
                          isFirst
                            ? 'bg-gray-400 border-gray-400'
                            : isChecked
                            ? 'bg-[#5a4891] border-none'
                            : 'border-gray-500'
                        )}
                      >
                        {isChecked && <span>✔</span>}
                      </div>
                      <span className="text-[12px] sm:text-[13px] lg:text-[15px] font-medium">
                        {feature.text}
                        <span className="text-gray-400 sm:ml-2 ml-[3px] text-[10px] sm:text-[12px] lg:text-[14px] font-medium">
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
                <h3 className="font-semibold text-[16px] lg:text-[17px] mb-4 font-medium">Additional Features</h3>
                <ul className="space-y-3">
                  {currentQuestion.additionalFeatures.map((feature, index) => (
                    <li
                      key={index}
                      onClick={() => toggleFeature('additional', feature.text)}
                      className="flex items-center space-x-3 cursor-pointer"
                    >
                      <div
                        className={clsx(
                          'w-4 h-4 rounded border-2 flex items-center justify-center text-white text-[10px] font-bold',
                          selectedAdditional[step]?.has(feature.text)
                            ? 'bg-[#5a4891] border-none'
                            : 'border-white'
                        )}
                      >
                        {selectedAdditional[step]?.has(feature.text) && <span>✔</span>}
                      </div>
                      <span className="text-[12px] sm:text-[13px] lg:text-[15px] font-medium">
                        {feature.text}
                        <span className="text-gray-400 sm:ml-2 ml-[3px] text-[10px] sm:text-[12px] lg:text-[14px] font-medium">
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
