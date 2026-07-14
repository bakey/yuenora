import { assetUrl } from "@/lib/assets";
import { useI18n } from "../i18n";

type BrandMarkProps = {
  className?: string;
  compact?: boolean;
  showText?: boolean;
};

export default function BrandMark({ className = "", compact = false, showText = true }: BrandMarkProps) {
  const { t } = useI18n();
  const classes = ["brand-mark", compact ? "brand-mark--compact" : "", className].filter(Boolean).join(" ");

  return (
    <span className={classes}>
      <img src={assetUrl("/assets/brand/yuenora-logo.png")} alt={t("brand.logoAlt")} />
      {showText && (
        <span className="brand-mark__text">
          <b>{t("brand.name")}</b>
        </span>
      )}
    </span>
  );
}
