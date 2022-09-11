var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  T: () => Time
});
module.exports = __toCommonJS(stdin_exports);
var import_index = require("./index.js");
var import_dayjs = __toESM(require("dayjs"));
var import_relativeTime = __toESM(require("dayjs/plugin/relativeTime.js"));
import_dayjs.default.extend(import_relativeTime.default);
const Time = (0, import_index.c)(($$result, $$props, $$bindings, slots) => {
  let title;
  let $$restProps = (0, import_index.f)($$props, ["timestamp", "format", "relative", "live", "formatted"]);
  let { timestamp = new Date().toISOString() } = $$props;
  let { format = "MMM DD, YYYY" } = $$props;
  let { relative = false } = $$props;
  let { live = false } = $$props;
  let { formatted = "" } = $$props;
  if ($$props.timestamp === void 0 && $$bindings.timestamp && timestamp !== void 0)
    $$bindings.timestamp(timestamp);
  if ($$props.format === void 0 && $$bindings.format && format !== void 0)
    $$bindings.format(format);
  if ($$props.relative === void 0 && $$bindings.relative && relative !== void 0)
    $$bindings.relative(relative);
  if ($$props.live === void 0 && $$bindings.live && live !== void 0)
    $$bindings.live(live);
  if ($$props.formatted === void 0 && $$bindings.formatted && formatted !== void 0)
    $$bindings.formatted(formatted);
  formatted = relative ? (0, import_dayjs.default)(timestamp).from() : (0, import_dayjs.default)(timestamp).format(format);
  title = relative ? (0, import_dayjs.default)(timestamp).format(format) : void 0;
  return `<time${(0, import_index.g)(
    [
      (0, import_index.h)($$restProps),
      { title: (0, import_index.i)(title) },
      {
        datetime: (0, import_index.i)(timestamp)
      }
    ],
    {}
  )}>${(0, import_index.b)(formatted)}</time>`;
});
