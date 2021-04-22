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
                                Step by step
                            </h1>
                            {steps &&
                                steps?.map((step: any) => (
                                    <div className="w-full my-2">
                                        <p className="inline-flex text-sm">
                                            <h2 className="inline-block mx-4 text-xl font-semibold text-red-400">
                                                1.
                                            </h2>
                                            <p className="flex-auto inline-block mx-8 text-xl">
                                                Lorem ipsum dolor sit amet,
                                                consetetur sadipscing elitr, sed
                                                diam nonumy eirmod tempor
                                                invidunt ut labore et dolore
                                                magna aliquyam erat, sed diam
                                                voluptua. At vero eos et accusam
                                                et justo duo dolores et ea
                                                rebum.
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
