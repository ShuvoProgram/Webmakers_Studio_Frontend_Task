function FrequentlyAsked() {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <h2 className="text-4xl font-bold text-center text-gray-900 sm:text-5xl">Frequently Asked Questions</h2>
                <p className="p-2 mt-2 mb-4 text-base text-gray-500 font-medium text-center">Everything you need to know about the product and billing.</p>
                <div className="bg-white divide-y divide-gray-200 rounded-xl md:m-12">
                    <details className="p-6 group" open>
                        <summary className="flex items-center justify-between cursor-pointer">
                            <h5 className="text-lg font-medium text-gray-900">
                                Is there a free trial available?
                            </h5>

                            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">
                            Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
                        </p>
                    </details>

                    <details className="p-6 group">
                        <summary className="flex items-center justify-between cursor-pointer">
                            <h5 className="text-lg font-medium text-gray-900">
                                Can I change my plan later?
                            </h5>

                            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">
                            Yes, our plans are flexible. You can easily upgrade or downgrade your plan at any time to better suit your needs.
                        </p>
                    </details>

                    <details className="p-6 group">
                        <summary className="flex items-center justify-between cursor-pointer">
                            <h5 className="text-lg font-medium text-gray-900">
                                What is your cancellation policy?
                            </h5>

                            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">
                            Our cancellation policy allows free cancellations up to 24 hours before the scheduled service. Within 24 hours, a fee may apply. Please refer to our terms for specific details.
                        </p>
                    </details>
                    <details className="p-6 group">
                        <summary className="flex items-center justify-between cursor-pointer">
                            <h5 className="text-lg font-medium text-gray-900">
                                Can other info be added to an invoice?
                            </h5>

                            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">
                            Yes, additional information can be included on an invoice. You can add specifics like purchase order numbers, payment terms, item descriptions, or any relevant details to meet your business needs.
                        </p>
                    </details>
                    <details className="p-6 group">
                        <summary className="flex items-center justify-between cursor-pointer">
                            <h5 className="text-lg font-medium text-gray-900">
                                How does billing work?
                            </h5>

                            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">
                            Billing is based on your chosen plan and usage. We offer monthly subscriptions with automatic charges. Your billing cycle begins on the date of sign-up. Usage beyond the plans limit incurs additional fees, reflected in the following months invoice.
                        </p>
                    </details>
                    <details className="p-6 group">
                        <summary className="flex items-center justify-between cursor-pointer">
                            <h5 className="text-lg font-medium text-gray-900">
                                How do I change my account email?
                            </h5>

                            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">

                            To change your account email, log in and go to Settings. Click on Account Info or Profile Settings and locate the Email section. Enter your new email and verify the change via the confirmation link sent to your new email address.
                        </p>
                    </details>
                </div>
            </div>
        </section>
    )
}

export default FrequentlyAsked