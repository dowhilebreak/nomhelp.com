const Utilities = {
    spliceString(original_string, start_index, end_index, replacement) {
        return original_string.substring(0, start_index) + replacement + original_string.substring(end_index);
    }
};

export default Utilities;