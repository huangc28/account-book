export default (...funcs) => funcs.reduce((a, b) => (...args) => a(b(...args)))
