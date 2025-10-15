'use client';

import { data } from '../data';
import { data2 } from '../data2';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Estimate from '../components/Estimate';
import titleToFeature from '../components/features'
import CategorySelector from '../components/CategorySelector';
import PlatformSelection from '../components/PlatformSelection';
import FeatureSelectionStep from '../components/FeatureSelectionStep';
import DesignSelectionStep from '../components/DesignSelectionStep';
import SummaryPanel from '../components/SummaryPanel';
import AddCategoryForm from '../components/AddCategoryForm';
import SelectedOverview from '../components/SelectedOverview';
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Hero from './Hero';


export default function Pricing() {
    const router = useRouter();
    const [category, setCategory] = useState('');
    const [selectedPlatform, setSelectedPlatform] = useState(null);
    const [currentStep, setCurrentStep] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [lenght, setLenght] = useState(0);
    const [yesNo, setYesNo] = useState([]);
    const [selectedMVP, setSelectedMVP] = useState([]);
    const [selectedAdditional, setSelectedAdditional] = useState([]);
    const [lastscreen, setLastScreen] = useState(true);
    const [design, setDesign] = useState(null);
    const [designHours, setDesignHours] = useState(0);
    const [features, setFeatures] = useState();
    const [successMessage, setSuccessMessage] = useState("");
    const [typeCategories, setTypeCategories] = useState([]);
    const [hero , setHero]= useState(true);
    const [type , setType ] = useState('');

   // const { type } = useType();

    useEffect(() => {
        if (!type) {
            setHero(true)
        }
        if (type === 'business') {
            setTypeCategories(data);
        } else if (type === 'existing') {
            setTypeCategories(data2);
        } else {
            setHero(true)
        }
    }, [type]);

    console.log('type on pricng', type)

    const handleBackCategorySelecter = () => {
        setType('')
        setHero(true);
    };



    // Add category form
    const [formData, setFormData] = useState({
        category: "",
        name: "",
        email: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, "submissions"), {
                name: formData.name,
                email: formData.email,
                category: formData.category,
                timestamp: new Date()
            });

            // console.log("Submitted:", formData);

            setFormData({ category: "", name: "", email: "" });
            setSuccessMessage("Form submitted successfully!");

            setTimeout(() => {
                setSuccessMessage("");
            }, 3000);
        } catch (error) {
            console.error(" Error adding document:", error);
            setSuccessMessage("Something went wrong");
        }
    };

    const handleCategorySelect = (categoryName) => {
        setCategory(categoryName);
        setCurrentStep(0);
    };

    const handleNext = () => {
        setCurrentStep((prev) => prev + 1);
    };

    const questions = typeCategories[category];

    useEffect(() => {
        if (category) {
            setCurrentQuestion(questions[currentStep])
            setLenght(questions.length)
        }
    }, [category, currentStep])


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

        if (currentQuestion.id === 'qn') {
            setDesign(null)
            setDesignHours(0)
        }
    };


    const isDisabled = currentStep === 0 ? !selectedPlatform :
        currentQuestion?.id === 'qn' ?
            design == null : yesNo[currentStep] == null;


    useEffect(() => {
        const features = new Set();

        for (let i = 1; i < yesNo.length && i < questions.length - 1; i++) {
            if (yesNo[i] === "yes") {
                const question = questions[i];
                const feature = titleToFeature[question.title];
                if (feature) {
                    features.add(feature);
                }
            }
        }

        setFeatures(features);
    }, [currentStep, yesNo]);


    const handleLast = () => {
        setLastScreen(true)
    }

    const calculateTotalHours = () => {
        let total = 0;

        questions?.forEach((question, step) => {
            const mvp = selectedMVP[step];
            const add = selectedAdditional[step];
            if (selectedPlatform === 'Android') {

                if (mvp) {
                    for (const feature of question.featuresForMVP || []) {
                        if (mvp.has(feature.text)) total += feature.AndroidHours;
                    }
                }

                if (add) {
                    for (const feature of question.additionalFeatures || []) {
                        if (add.has(feature.text)) total += feature.AndroidHours;
                    }
                }
            }
            if (selectedPlatform === 'IOS') {

                if (mvp) {
                    for (const feature of question.featuresForMVP || []) {
                        if (mvp.has(feature.text)) total += feature.IOSHours;
                    }
                }

                if (add) {
                    for (const feature of question.additionalFeatures || []) {
                        if (add.has(feature.text)) total += feature.IOSHours;
                    }
                }
            }
            if (selectedPlatform === 'Both') {

                if (mvp) {
                    for (const feature of question.featuresForMVP || []) {
                        if (mvp.has(feature.text)) total += feature.BothHours;
                    }
                }

                if (add) {
                    for (const feature of question.additionalFeatures || []) {
                        if (add.has(feature.text)) total += feature.BothHours;
                    }
                }
            }
        });

        if (designHours) {
            total += designHours;
        }

        return parseFloat(total.toFixed(1));
    };


    const handleBackLastScreen = () => {
        setYesNo([])
        setCategory('')
        setSelectedPlatform(null)
        setSelectedMVP([])
        setSelectedAdditional([])
        setLastScreen(false)
        setDesign(null)
        setDesignHours(0)
        console.log('back on formn 2')
    }

    console.log('selectedAdditional', selectedAdditional)
    console.log('selectedMVP', selectedMVP)
    console.log('category', category)
    console.log('yesno', yesNo)
    console.log('selectedplatform', selectedPlatform)

    function extractSelectedFeaturesWithHours({ questions, yesNo, selectedMVP, selectedAdditional }) {
        const result = [];

        questions?.forEach((question, index) => {
            // Ignore the first and last questions
            if (question?.id === 'q0' || question.id === 'qn') return;

            // Skip if the answer is not 'yes'
            if (yesNo[index] !== 'yes') return;

            const mvpSet = selectedMVP[index];
            const additionalSet = selectedAdditional[index];

            // Skip if neither MVP nor Additional features are selected
            if (!mvpSet?.size && !additionalSet?.size) return;

            // Filter selected MVP features with hours
            const selectedMVPFeatures = question?.featuresForMVP?.filter(feature =>
                mvpSet?.has(feature.text)
            ) || [];

            // Filter selected Additional features with hours
            const selectedAdditionalFeatures = question?.additionalFeatures?.filter(feature =>
                additionalSet?.has(feature.text)
            ) || [];

            // Sum up the hours
            const getFeatureHours = (feature) => {
                if (selectedPlatform === 'Android') return feature.AndroidHours || 0;
                if (selectedPlatform === 'IOS') return feature.IOSHours || 0;
                if (selectedPlatform === 'Both') return feature.BothHours || 0;
                return 0;
            };

            const mvpHours = selectedMVPFeatures.reduce((sum, f) => sum + getFeatureHours(f), 0);
            const additionalHours = selectedAdditionalFeatures.reduce((sum, f) => sum + getFeatureHours(f), 0);

            // 🆕 Map the question title using titleToFeature
            const mappedTitle = titleToFeature[question.title] || question.title;

            // Push structured data
            result.push({
                questionTitle: mappedTitle,
                selectedMVP: selectedMVPFeatures.map(f => ({ text: f.text, hours: getFeatureHours(f) })),
                selectedAdditional: selectedAdditionalFeatures.map(f => ({ text: f.text, hours: getFeatureHours(f) })),
                mvpHours: +mvpHours.toFixed(1),
                additionalHours: +additionalHours.toFixed(1),
            });
        });

        return result;
    }
    const selectedData = extractSelectedFeaturesWithHours({
        questions,
        yesNo,
        selectedMVP,
        selectedAdditional,
    });

    console.log("Selected Data:", selectedData);

    const handleType1 = () => {
        setType('existing')
        setHero(false)
    }

    const handleType2 = () => {
        setType('business')
        setHero(false)
    }

    return (
        <div className='min-h-[700px] mx-4 px-4'>
            {hero ? (
                <>
                    <Hero onTypeSelect={(selectedType) => {
                        setType(selectedType);
                        setHero(false);
                    }} />
                </>
            ): (
            <>
                <div className="pt-16   ">

                    {lastscreen ? (
                        <>
                            <div className='max-w-[1400px] mx-auto relative shadow-2xl rounded-[18px]'>
                                <div className="absolute top-8 left-6">
                                    <button
                                        onClick={() => handleBackLastScreen()}
                                        className="text-sm text-gray-600 hover:underline flex items-center gap-1"
                                    >
                                        <ArrowLeft size={16} />
                                        Back
                                    </button>
                                </div>
                                <Estimate
                                    estimate={calculateTotalHours(currentStep)}
                                    selectedData={selectedData}
                                    category={category}
                                    selectedPlatform={selectedPlatform}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            {!category ? (
                                // ======= Category Selection View =======
                                <CategorySelector
                                    categories={typeCategories}
                                    onSelectCategory={handleCategorySelect}
                                    onBack={handleBackCategorySelecter}
                                    type={type}
                                />
                            ) : (
                                // ======= Step One: Platform Selection =======
                                <div className="flex flex-col lg:flex-row gap-6 max-w-[1340px] mx-auto">
                                    {/* Left Section */}
                                    <div className="flex-1  rounded-2xl sm:p-6 p-4 shadow-2xl">
                                        <div>
                                            <div className="flex items-center justify-between sm:mb-8 mb-4">
                                                <button
                                                    onClick={() => handleBack()}
                                                    className="flex items-center text-sm text-gray-500 hover:underline"
                                                >
                                                    <ArrowLeft size={16} className="mr-1" />
                                                    Back
                                                </button>
                                                <span className="text-[12px] sm:text-sm bgPink text-white px-4 py-2 rounded-full">
                                                    Step {currentStep + 1} of {questions.length}
                                                </span>
                                            </div>

                                            <h2 className="text-heading font-semibold sm:mb-12 mb-4">
                                                {currentQuestion?.title}
                                            </h2>
                                            {currentStep === 0 && category !== '+ Add' && (
                                                <PlatformSelection
                                                    options={currentQuestion?.options || []}
                                                    selectedPlatform={selectedPlatform}
                                                    onSelect={setSelectedPlatform}
                                                />
                                            )}
                                            {currentStep > 0 && currentStep <= lenght - 2 && (
                                                <FeatureSelectionStep
                                                    step={currentStep}
                                                    currentQuestion={currentQuestion}
                                                    yesNo={yesNo}
                                                    setYesNo={setYesNo}
                                                    selectedMVP={selectedMVP}
                                                    setSelectedMVP={setSelectedMVP}
                                                    selectedAdditional={selectedAdditional}
                                                    selectedPlatform={selectedPlatform}
                                                    setSelectedAdditional={setSelectedAdditional}
                                                />
                                            )}

                                            {currentQuestion.id === 'qn' && (
                                                <DesignSelectionStep
                                                    options={currentQuestion.options}
                                                    selectedDesign={design}
                                                    selectedPlatform={selectedPlatform}
                                                    setSelectedDesign={setDesign}
                                                    setDesignHours={setDesignHours}
                                                />
                                            )}

                                            {category === '+ Add' && (
                                                <>
                                                    <AddCategoryForm
                                                        formData={formData}
                                                        handleChange={handleChange}
                                                        handleSubmit={handleSubmit}
                                                        successMessage={successMessage}
                                                    />
                                                </>

                                            )}

                                            {category !== '+ Add' &&
                                                <div className="flex justify-end sm:mb-6 mb-4 mt-2">
                                                    <button
                                                        className={clsx(
                                                            'sm:px-6 sm:py-3 px-5 py-3 rounded-full text-white transition sm:text-[16px] text-[12px]',
                                                            !isDisabled ? 'bgPink cursor-pointer' : 'bg-[#D8216D]/40 cursor-not-allowed'
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
                                                        <div className='flex flex-row justify-center items-center gap-2'>
                                                            <p>Save and continue</p>
                                                            <ArrowRight size={20} />

                                                        </div>

                                                    </button>
                                                </div>
                                            }

                                        </div>
                                        {category !== '+ Add' && (
                                            <SelectedOverview
                                                selectedPlatform={selectedPlatform}
                                                features={features}
                                                currentQuestion={currentQuestion}
                                                questions={questions}
                                                selectedMVP={selectedMVP}
                                                selectedAdditional={selectedAdditional}
                                                setCurrentStep={setCurrentStep}
                                            />

                                        )}
                                    </div>
                                    {/* Right Panel */}
                                    {category !== '+ Add' && (
                                        <SummaryPanel totalHours={calculateTotalHours(currentStep)} />
                                    )}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </>
            )}
        </div>

    );
}
