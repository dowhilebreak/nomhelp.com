import React from "react";

const Utilities = {
    spliceString(original_string, start_index, end_index, replacement) {
        return original_string.substring(0, start_index) + replacement + original_string.substring(end_index);
    },

    createRecipeLine(replacement, original, tail) {
        return (
            <span className={"transformed-chunk"}>
                <span>
                    <span className={"translated-value"}>{replacement}</span>
                    <span className={"original-value"}>{original}</span>
                </span>
                {tail}
            </span>
        );
    },

    isString(test_var) {
        return (typeof test_var === 'string' || test_var instanceof String);
    }
};

export default Utilities;
