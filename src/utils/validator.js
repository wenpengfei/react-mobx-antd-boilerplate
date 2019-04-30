const createRequiredRules = (rules) => rules.reduce((acc, curr) => {
  return Object.assign(acc, { [curr.name]: { rules: [{ required: true, message: curr.message }] } })
}, {})

export default createRequiredRules
