import React from "react";

const Partners = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container max-w-4xl px-6 py-10 mx-auto prose dark:prose-invert">
                <h1 className="text-center">Our Partner</h1>
                <section className="Partners-logos" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img style={{width:"250px"}} src="https://innak-crew.github.io/innak-logo/rec/Innak-Transprent.png" alt="Partner Logo" />
                </section>
            </div>
        </section>
    );
};

export default Partners;
