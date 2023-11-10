"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonationEntity = void 0;
const typeorm_1 = require("typeorm");
const campaign_entity_1 = require("../../campaign/entities/campaign.entity");
let DonationEntity = class DonationEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DonationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], DonationEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => campaign_entity_1.CampaignEntity, (camp) => camp.donations),
    (0, typeorm_1.Index)(),
    __metadata("design:type", campaign_entity_1.CampaignEntity)
], DonationEntity.prototype, "campaign", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 14, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], DonationEntity.prototype, "amount", void 0);
DonationEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'dontaion' })
], DonationEntity);
exports.DonationEntity = DonationEntity;
//# sourceMappingURL=donation.entity.js.map