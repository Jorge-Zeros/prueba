"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var Usuario_1 = require("../src/models/Usuario");
var mongoose_1 = require("mongoose");
var connectionString = "mongodb+srv://161534:UftqIrKUiv81MecS@cluster0.aevwbq5.mongodb.net/tutorias_db?retryWrites=true&w=majority" ||
    "";
console.log(connectionString);
mongoose_1["default"]
    .connect(connectionString, {})
    .then(function (req) { return console.log("Database connected!"); })["catch"](function (err) {
    console.log(err);
    console.log("No funciono la coneccion a la db");
});
/* ID_Docente	Apellido Paterno	Apellido Materno	Nombres
    112314	ENCISO 	RODAS	LAURO
    123455	ACURIO	USCA	NILA ZONIA
    332487	MEDRANO	VALENCIA	IVÁN CÉSAR
    843247	CANDIA	OVIEDO	DENNIS IVAN
    651120	MEDINA	MIRANDA	KARELIA
    462588	IBARRA	ZAMBRANO	WALDO ELIO
    279012	VERA	OLIVERA	HARLEY
    389902	BACA	CARDENAS	LINO AQUILES
    590124	CHULLO	LLAVE	BORIS
    102966	FALCON	HUALLPA	ELIDA
*/
/* Puedes crear un array de arrays con los datos de los codigo de tutores y nombres concatenando los apellido paterno, materno y nombres
 */
var tutores = [["462588", "IBARRA ZAMBRANO WALDO ELIO"]];
// Insertar los datos en la base de datos
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var _i, tutores_1, tutor, partes, user, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _i = 0, tutores_1 = tutores;
                _a.label = 1;
            case 1:
                if (!(_i < tutores_1.length)) return [3 /*break*/, 6];
                tutor = tutores_1[_i];
                partes = tutor[1].split(" ");
                user = new Usuario_1.Director({
                    codigo: tutor[0],
                    nombre: tutor[1],
                    email: "".concat(partes[2], ".").concat(partes[0], "@unsaac.edu.pe")
                });
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, user.save()];
            case 3:
                _a.sent();
                return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                console.error("Error al guardar el usuario: ".concat(error_1));
                return [3 /*break*/, 5];
            case 5:
                _i++;
                return [3 /*break*/, 1];
            case 6: return [2 /*return*/];
        }
    });
}); })()["catch"](function (err) { return console.error(err); });
