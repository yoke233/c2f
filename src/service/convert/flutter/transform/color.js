import color from "color";

const toFColor = val => {
  try {
    val = typeof val === "string" ? val.trim() : val;
    const c16 = color(val)
      .hex()
      .replace(/^#/, "0xFF");

    return `Color(${c16})`;
  } catch (e) {
    const c16 = (val + "").replace(/^#/, "0xFF");
    return `Color(${c16})`;
  }
};

export default toFColor;
