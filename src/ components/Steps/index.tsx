type Props = {
    steps: any;
};

const Steps: React.FC<Props> = ({ steps }) => {
    return (
        <>
            <div className="flex">
                <div className="flex-auto p-6">
                    <div className="rounded-r-xl p-6 shadow-xl">
                        <div className="flex flex-wrap">
                            <h1 className="flex-auto mx-4 my-2 text-xl font-semibold">
                                Schritt für Schritt
                            </h1>
                            {steps &&
                                steps
                                    ?.sort(
                                        (
                                            a: { number: number },
                                            b: { number: number }
                                        ) => {
                                            return a.number - b.number;
                                        }
                                    )
                                    .map((step: any) => (
                                        <div className="w-full my-2">
                                            <p className="inline-flex text-sm">
                                                <h2 className="inline-block mx-4 text-xl font-semibold text-red-400">
                                                    {step.number}
                                                </h2>
                                                <p className="flex-auto inline-block mx-8 text-xl">
                                                    {step.text}
                                                </p>
                                            </p>
                                        </div>
                                    ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Steps;
