import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function InformationProduct() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        style={{ boxShadow: "none" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>概要 </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ・アウターだけでなく、ロングコートのインナーフリースや室内での防寒着にも使える。
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{ boxShadow: "none" }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>商品詳細</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            商品番号 439140
            この商品は同一商品でもタグに記載される商品番号が異なる場合があります。予めご了承ください。
            素材 表側： 100％ ポリエステル/ 裏側： 100％ ポリエステル 取扱い
            洗濯機・ネット使用
            この商品の生地は樹脂加工品です。新品のまま収納していても、年月の経過と共に、また、空気中の湿度や紫外線、熱や汚れ等により、劣化・剥離する特性が有ります。湿った状態や摩擦で色移りする事がありますのでご注意下さい。家庭洗濯時の乾燥機の使用は避け、風通しの良い所で十分乾燥させた後、保管して下さい。お取り扱いにより劣化が促進される場合がありますのでご注意下さい。2021年製造。
            ・XS・XXL・3XLサイズは、オンラインストアのみでの取り扱いとなります。
            ・店舗とは販売日が異なることがあります。
            ・当商品の店舗在庫状況は、販売開始後、『店舗在庫の検索』ボタンでご確認ください。{" "}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{ boxShadow: "none" }}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>再限定</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            当商品は、表示している限定販売期間経過後も、継続してまたは、数日中に限定価格販売を行う可能性があります。また、価格についても値下げする場合があります。予めご了承下さい。
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
