const SALE_QUESTIONS = [
    {
        id: 1,
        question: "Thu ngân hỏi thẻ khách hàng trong trường hợp nào?",
        answers: [
            "A. Hỏi thẻ khách hàng trước khi thực hiện thao tác tính tiền.",
            "B. Hỏi thẻ khách hàng trong khi thực hiện thao tác tính tiền.",
            "C.	Hỏi thẻ khách hàng sau khi thực hiện thao tác tính tiền.",
            "D.	Cả 3 trường hợp đều được."
        ]
    },
    {
        id: 2,
        question: "Sau khi thực hiện xong thao tác tính tiền cho khách:",
        answers: [
            "A. Đọc số tiền chính xác trên màn hình trước khi in hóa đơn cho khách, nhận tiền của khách và thối tiền bằng hai tay.",
            "B.	Đọc số tiền chính xác trên màn hình trước khi in hóa đơn cho khách, nhận tiền của khách, kiểm tra và thối tiền bằng hai tay.",
            "C.	Đọc số tiền chính xác trên màn hình trước khi in hóa đơn cho khách, nhận tiền của khách, kiểm tra, trao hóa đơn và nói cảm ơn khách.",
            "D.	Đọc số tiền chính xác trên màn hình trước khi in hóa đơn cho khách, nhận tiền của khách, kiểm tra, trao hóa đơn, thối tiền bằng hai tay và nói cảm ơn khách."
        ]
    },
    {
        id: 3,
        question: "Khi khách đến quầy tính tiền nhiệm vụ thu ngân làm gì đầu tiên trong thao tác tính tiền?",
        answers: [
            "A. Thực hiện thao tác tính tiền.",
            "B.	Gật đầu chào hỏi khách .",
            "C.	Không nói gì.",
            "D.	Hỏi thẻ khách ."
        ]
    },
    {
        id: 4,
        question: "Có bao nhiêu loại thẻ phổ biến hiện nay?",
        answers: [
            "A. Thẻ Credit (thẻ tín dụng), Thẻ Debit (thẻ ghi nợ, thẻ ATM),",
            "B.	Thẻ Debit (thẻ ghi nợ, thẻ ATM), Prepaid (thẻ trả trước),",
            "C.	Prepaid (thẻ trả trước), thẻ Credit (thẻ tín dụng).",
            "D.	Thẻ Credit (thẻ tín dụng), thẻ Debit (thẻ ghi nợ, thẻ ATM), Prepaid (thẻ trả trước)."
        ]
    },
    {
        id: 5,
        question: "Phiếu quà tặng gồm bao nhiêu mệnh giá?",
        answers: [
            "A.	2 (500.000; 200.000).",
            "B.	3 ( 500.000; 200.000; 100.000).",
            "C.	4 (500.000; 200.000; 100.000, 50.000).",
            "D.	5 (500.000; 200.000; 100.000, 50.000; 20.000)."
        ]
    },
    {
        id: 6,
        question: "Có các hình thức thanh toán nào tại quầy?",
        answers: [
            "A.	Thanh toán bằng tiền mặt, thẻ ngân hàng.",
            "B.	Thanh toán bằng tiền mặt, thẻ ngân hàng, phiếu quà tặng.",
            "C.	Thanh toán bằng tiền mặt, thẻ ngân hàng, phiếu quà tặng, chiết khấu thương mại.",
            "D.	Thanh toán bằng tiền mặt, thẻ ngân hàng, phiếu quà tặng, chiết khấu thương mại, coupon giảm giá."
        ]
    },
    {
        id: 7,
        question: "Thứ tự ưu tiên thanh toán trên chương trình WINDSS như sau:",
        answers: [
            "A.	Tiền mặt, phiếu chiết khấu thương mại, thẻ ngân hàng, phiếu mua hàng.",
            "B.	Phiếu chiết khấu thương mại, thẻ ngân hàng, phiếu mua hàng, tiền mặt.",
            "C.	Thẻ ngân hàng, phiếu mua hàng, tiền mặt, phiếu chiết khấu thương mại.",
            "D.	Thẻ ngân hàng, phiếu mua hàng, phiếu chiết khấu thương mại, tiền mặt."
        ]
    },
    {
        id: 8,
        question: "Nếu số tiền trên phiếu chiết khấu thương mại, phiếu mua hàng nhiều hơn giá trị hàng khách đã mua thu ngân xử lý như thế nào?",
        answers: [
            "A.	Thối phần tiền chênh lệch cho khách.",
            "B.	Giải thích với khách hàng về số tiền chênh lệch, khách hàng sẽ không được nhận lại và đề nghị khách hàng mua thêm hàng.",
            "C.	Khuyến khích khách hàng mua thêm bằng chính xác với trị giá của phiếu.",
            "D.	Cả A và B đều đúng."
        ]
    },
    {
        id: 9,
        question: "Thời gian đổi trả hàng theo quy trình mới (QT-20) là bao nhiêu ngày?",
        answers: [
            "A.	7 ngày.",
            "B.	14 ngày.",
            "C.	15 ngày.",
            "D.	10 ngày."
        ]
    },
    {
        id: 10,
        question: "Siêu thị không nhận đổi trả các mặt hàng nào?",
        answers: [
            "A.	Rượu, thuốc lá, nước hoa, thực phẩm đông lạnh, hàng cần bảo quản mát.",
            "B.	Đồ lót, thực phẩm tươi sống, chế biến nấu chín, hàng có hạn sử dụng ngắn dưới 15 ngày.",
            "C.	A và B đều đúng.",
            "D.	Rượu, thuốc lá, nước hoa, thực phẩm đông lạnh, hàng cần bảo quản mát, thực phẩm tươi sống, chế biến nấu chín, hàng có hạn sử dụng ngắn dưới 15 ngày."
        ]
    },
    {
        id: 11,
        question: "Những mặt hàng được đóng gói không niêm phong của nhà cung cấp khi tính tiền cần xử lý như thế nào?",
        answers: [
            "A.	Mở hàng ra kiểm tra.",
            "B.	Vẫn scan hàng tính tiền như những mặt hàng bình thường.",
            "C.	Chỉ kiểm tra những hàng có niêm phong của nhà cung cấp.",
            "D.	Cả 3 câu đều sai."
        ]
    },
    {
        id: 12,
        question: "Mục đích của việc kiểm tra hàng đóng gói không niêm phong của nhà cung cấp khi thực hiện thao tác tính tiền để làm gì?",
        answers: [
            "A.	Phát hiện tráo hàng kịp thời để xử lý.",
            "B.	Thực hiện theo quy trình.",
            "C.	Tránh thất thoát hàng.",
            "D.	A và C đúng."
        ]
    },
    {
        id: 13,
        question: "Thu ngân đề nghị hủy hóa đơn do đâu?",
        answers: [
            "A.	Chọn sai hình thức thanh toán, nhập sai mã thẻ khách hàng giảm coupon sinh nhật.",
            "B.	Quên nhập mà thẻ khách hàng.",
            "C.	Khách hàng đề nghị tách hóa đơn khi đề nghị xuất hóa đơn GTGT.",
            "D.	Cả A, B, C đều đúng."
        ]
    },
    {
        id: 14,
        question: "Khi có khách hàng phản ánh về việc thu ngân thối nhầm tiền:",
        answers: [
            "A.	Xin lỗi khách, báo trường hợp này cho BĐH bảo vệ.",
            "B.	Xin lỗi khách, báo trường hợp này cho BĐH thu ngân.",
            "C.	Báo ngay với BĐH thu ngân, xin lỗi và mong khách chờ trong ít phút để kiểm tra lại.",
            "D.	Xin lỗi, báo khách vài phút để thu ngân kiểm tra lại."
        ]
    },
    {
        id: 15,
        question: "Các đối tượng nào sau đây được thanh toán tại quầy ưu tiên?",
        answers: [
            "A.	Người già, người tàn tật, trẻ em, phụ nữ mang thai, khách mua dưới 5 món hàng.",
            "B.	Khách hàng mua dưới 5 mặt hàng, người già, người tàn tật, phụ nữ có thai, khách có mang theo thẻ VIP.",
            "C.	Khách hàng có tham gia chương trình khách hàng thân thiết, trẻ em, người già, người tàn tật, phụ nữ có thai.",
            "D.	Người già, người tàn tật, phụ nữ có thai, khách hàng mua dưới 5 món hàng."
        ]
    },
    {
        id: 16,
        question: "Khi trao tiền thối cho khách hàng, thu ngân cần phải:",
        answers: [
            "A.	Đưa tận tay.",
            "B.	Để trên bàn tính tiền.",
            "C.	Trao bằng hai tay.",
            "D.	Bỏ vào giỏ hàng cho khách."
        ]
    },
    {
        id: 17,
        question: "Những trường hợp nào khách được phục vụ tại Quầy ưu tiên?",
        answers: [
            "A.	Khách hàng mua từ 1 đến 6 món.",
            "B.	Trẻ em từ 8 đến 10 tuổi.",
            "C.	Phụ nữ có thai.",
            "D.	Cả 3 câu trên đều đúng."
        ]
    },
    {
        id: 18,
        question: "Khi khách thanh toán tiền xong rời khỏi quầy được một lát sau thì bạn phát hiện khách để quên 1 bịch hàng tại quầy của mình. Bạn cần phải làm gì?",
        answers: [
            "A.	Báo bảo vệ quầy đọc loa mời khách hàng quay lại nhận.",
            "B.	Báo BĐH tổ đọc loa mời khách hàng đến nhận.",
            "C.	Tạm đóng quầy, chạy theo hướng khách vừa đi để tìm và trao lại túi hàng.",
            "D.	Cả a, b, c đều đúng."
        ]
    },
    {
        id: 19,
        question: "Khách hàng đã làm mất thẻ. Theo bạn lúc này khách sẽ làm gì để được cấp lại thẻ?",
        answers: [
            "A.	Đem CMND đến bất kỳ siêu thị nào trong hệ thống để được làm lại.",
            "B.	Đem CMND đến siêu thị đã đăng ký thẻ ban đầu để được làm lại.",
            "C.	Đem CMND đến Quầy dịch vụ tại siêu thị đang quản lý thẻ.",
            "D.	Đem phiếu in mã vạch tại Kiosk đến Quầy dịch vụ siêu thị đã đăng ký ban đầu."
        ]
    },
    {
        id: 20,
        question: "Thu ngân cần dùng các câu nói “ Xin lỗi” và “ Cảm ơn”:",
        answers: [
            "A.	Bất cứ khi nào nếu bạn xem là cần thiết.",
            "B.	Bất cứ khi nào nếu khách hàng yêu cầu.",
            "C.	Đúng lúc và đúng chỗ.",
            "D.	Bất cứ khi nào."
        ]
    },
    {
        id: 21,
        question: "Khi nhận tiền từ khách, bạn kiểm tra thì phát hiện có 1 tờ tiền giả. Bạn phải xử trí như thế nào cho tế nhị và hợp lý?",
        answers: [
            "A.	Nói với khách đó là tiền giả và yêu cầu khách đổi tờ khác.",
            "B.	Yêu cầu khách đổi tờ khác và báo với BV quầy đến lập biên bản.",
            "C.	Trả lại khách tờ tiền; sau đó báo BĐH và các thu ngân đến xem rút kinh nghiệm.",
            "D.	Lịch sự yêu cầu khách đổi tờ khác."
        ]
    },
    {
        id: 22,
        question: "Thu ngân cần thực hành Bộ quy tắc ứng xử, nguyên tắc 5C khi giao tiếp và phục vụ khách hàng như thế nào?",
        answers: [
            "A.	Cúi đầu khi chạm mắt khách hàng. Kết thúc giao dịch với khách nói lời cảm ơn.",
            'B.	Chủ động tươi cười và chào khách. Trao nhận thẻ, hàng với khách bằng 2 tay và nói "Cảm ơn" khi kết thúc giao dịch.',
            "C.	Sử dụng ngón tay và ánh mắt khi hướng dẫn khách hàng. Không nói quá nhanh hay quá nhỏ.",
            "D.	Giọng nói rõ ràng, sử dụng ngôn từ đơn giản. Không được nhìn thẳng vào mắt khách khi giao tiếp."
        ]
    },
    {
        id: 23,
        question: "Khi đang thanh toán tiền hàng thì khách phát hiện không đem đủ tiền và đang lưỡng lự. Lúc này Thu ngân cần xử lý như thế nào?",
        answers: [
            "A.	Nhanh chóng hỏi khách có khoảng bao nhiêu tiền rồi xóa bớt một số món hàng trong giao dịch để vừa đủ số tiền thanh toán.",
            "B.	Giới thiệu cho khách về dịch vụ giao hàng đến nhà thanh toán sau để khách không phải lo lắng phải thanh toán ngay tại quầy và cũng không phải trả bớt hàng lại.",
            "C.	Nhanh chóng hỏi khách có đem theo thẻ ngân hàng không vì siêu thị chấp nhận thanh toán qua thẻ ngân hàng hoặc hướng dẫn khách đến máy ATM để rút tiền.",
            "D.	Tất cả đều đúng."
        ]
    },
    {
        id: 24,
        question: "Sau khi thanh toán tiền cho khách thu ngân còn thêm nhiệm vụ nào nữa không?",
        answers: [
            "A.	Tính tiền cho khách tiếp theo.",
            "B.	Thối tiền và đưa bill cho khách và kết thúc thao tác tính tiền.",
            "C.	Thối tiền và đưa bill cho khách và kết thúc thao tác tính tiền, tư vấn chương trình khuyến mãi.",
            "D.	Cảm ơn khách và kết thúc thao tác tính tiền."

        ]
    },
    {
        id: 25,
        question: "Khách tính tiền nhưng không có thẻ, thu ngân xử lý như thế nào?",
        answers: [
            "A.	Tính tiền như bình thường.",
            "B.	Mời và thuyết phục khách đến quầy dịch vụ cung cấp thông tin làm thẻ.",
            "C.	Vẫn tính tiền cho khách và treo bill.",
            "D. B và C đều đúng."
        ]
    }
];

const SECURITY_QUESTIONS = [
    {
        ID: 1,
        question: "Khi khách hàng đánh rơi tài sản trong khu vực tự chọn bảo vệ phát loa thông báo ít nhất mấy lần?",
        answers: [
            "A.	1 lần.",
            "B.	2 lần.",
            "C.	3 lần .",
            "D.	4 lần."
        ]
    },
    {
        ID: 2,
        question: "Khi thời gian thông báo mà không có khách nhận lại tại sản, bảo vệ bàn giao tài sản cho:",
        answers: [
            "A.	Ban điều hành bảo vệ.",
            "B.	Nhân viên kế toán.",
            "C.	Kế toán trưởng.",
            "D.	Ban điều hành thu ngân."
        ]
    },
    {
        ID: 3,
        question: "Trong khoảng thời gian bao nhiêu ngày kể từ ngày lập biên bản không có khách nhận lại thì sẽ làm đề nghị xử lý tài sản khách đánh rơi:",
        answers: [
            "A.	7 ngày.",
            "B.	14 ngày.",
            "C.	20 ngày.",
            "D.	30 ngày."
        ]
    },
    {
        ID: 4,
        question: "Khi phát hiện khách tuồn hàng trong lúc thu ngân tính tiền bảo vệ xử lý như thế nào?",
        answers: [
            "A.	Phát loa lớn thông báo cho thu ngân biết.",
            "B.	Lịch sự tiến lại gần thu ngân và khách đọc tên hàng chưa tính và nhờ thu ngân kiểm tra lại.",
            "C.	Đứng vòng ngoài nhắc nhở.",
            "D.	Bỏ qua và xem như không thấy."
        ]
    },
    {
        ID: 5,
        question: "Khi có thông báo về đối tượng khách lấy cắp từ bảo vệ vòng trong, bảo vệ vòng ngoài xử lý như thế nào?",
        answers: [
            "A.	Quan sát khách tính tiền rời khỏi khu vực tự chọn và phát loa yêu cầu khách trả hàng lại.",
            "B.	Không quan tâm và không cần phải theo dõi.",
            "C.	Lịch sự tiếp cận, giải thích và mời khách về phòng bảo vệ bàn giao cho ban điều hành xử lý tránh làm khách tổn thương.",
            "D.	Hô hoán mọi người chặn khách lại."
        ]
    },
    {
        ID: 6,
        question: "Nếu khách báo làm rơi chìa khóa giữ giỏ bảo vệ đọc loa mấy lần để tìm chìa khóa cho khách:",
        answers: [
            "A.	1 lần.",
            "B.	2 lần.",
            "C.	3 lần.",
            "D.	4 lần."
        ]
    },
    {
        ID: 7,
        question: "Phương tiện chữa cháy nào thường được sử dụng đối với đám cháy mới phát sinh?",
        answers: [
            "A.	Bình bột PC	.",
            "B.	Nước.",
            "C.	Vòi chữa cháy bằng nước.",
            "D.	Bình khí CO2."
        ]
    },
    {
        ID: 8,
        question: "Khi cash thu ngân có 04 khách đang chờ thanh toán, phải xử lí bằng cách nào?",
        answers: [
            "A.	Đứng nguyên vị trí quan sát.",
            "B.	Đọc bộ đàm kêu các bộ phận hỗ trợ.",
            "C.	Cả 02 đều đúng.",
            "D.	Không làm gì cả."
        ]
    },
    {
        ID: 9,
        question: "Theo HD công việc, khi thu ngân yêu cầu trừ hàng trên máy tính tiền, thì phải làm các bước nào là đúng?",
        answers: [
            "A.	Đọc số ID-Scan Till trừ  hàng-cầm hàng để vào sau cash.",
            "B.	Hỏi thu ngân lí do trừ hàng(không có hàng hóa)-đối chiếu mặt hàng-đọc số ID-Scan till trừ hàng.",
            "C.	Hỏi thu ngân lí do trừ hàng(có hàng hóa)-đối chiếu mặt hàng-đọc số ID-Scan till trừ hàng,đem hàng hóa ra sau cash.",
            "D.	Cả 03 đều đúng."
        ]
    },
    {
        ID: 10,
        question: "Theo HD công việc,khi có 01 khách hàng xách balo đi vào khu vực tự chọn, thì xử lí cách nào sau đây:",
        answers: [
            "A.	Đứng nhìn khách đi vào khu tự chọn.",
            "B.	Cho khách đem balo vào và nói khách khi ra cho xem qua balo-túi xách.",
            "C.	Sử dụng dây gút niêm phong balo-túi xách cho khách.",
            "D.	Câu b và c đều đúng."
        ]
    },
    {
        ID: 11,
        question: "Bảo vệ lối vào - Có khách hàng nhờ dẫn đến line hàng (vì khách không biết) để khách mua hàng hóa, cách nào sau đây là đúng?",
        answers: [
            "A.	Dẫn khách đến nơi khách cần đến.",
            "B.	Nhắn ngành hàng ra hướng dẫn khách.",
            "C.	Chỉ khách về hướng để hàng hóa.",
            "D.	Câu b và a sai."
        ]
    },
    {
        id: 12,
        question: "Những trường hợp nào khách được phục vụ tại Quầy ưu tiên?",
        answers: [
            "A.	Khách hàng mua từ 1 đến 6 món.",
            "B.	Trẻ em từ 8 đến 10 tuổi.",
            "C.	Phụ nữ có thai.",
            "D.	Cả 3 câu trên đều đúng."
        ]
    },
    {
        ID: 13,
        question: "Khi phát hiện thu ngân tính tiền sai số lượng (tiêu cực), thì xử lí cách nào đúng?",
        answers: [
            "A.	Báo BĐH thu ngân - lập biên bản - báo trực lãnh đạo.",
            "B.	Báo BĐH bảo vệ - lập biên bản - báo giám đốc.",
            "C.	Theo dõi - Báo BĐH bảo vệ để xử lí.",
            "D.	Cả 03 đều đúng."
        ]
    },
    {
        ID: 14,
        question: "Thời gian trả hàng theo quy trình mới (QT-20) là bao nhiêu ngày?",
        answers: [
            "A.	7 ngày.",
            "B.	14 ngày.",
            "C.	15 ngày.",
            "D.	10 ngày."
        ]
    },
    {
        ID: 15,
        question: "Siêu thị không nhận đổi trả các mặt hàng nào?",
        answers: [
            "A.	Rượu, thuốc lá, nước hoa, thực phẩm đông lạnh, hàng cần bảo quản mát.",
            "B.	Đồ lót, thực phẩm tươi sống, chế biến nấu chín, hàng có hạn sử dụng ngắn dưới 15 ngày.",
            "C.	A và B đều đúng.",
            "D.	Rượu, thuốc lá, nước hoa, thực phẩm đông lạnh, hàng cần bảo quản mát, thực phẩm tươi sống, chế biến nấu chín, hàng có hạn sử dụng ngắn dưới 15 ngày.",
        ]
    },
    {
        ID: 16,
        question: "Động tác đưa thẻ giữ giỏ cho khách:",
        answers: [
            "A.	Đặt thẻ lên bàn.",
            "B.	Đưa bằng tận hai tay.",
            "C.	Đưa bằng một tay đỡ một tay.",
            "D.	Cả B và C đều được."
        ]
    },
    {
        ID: 17,
        question: "Khi khách hàng gửi đồ nhân viên bảo vệ hành xử như thế nào?",
        answers: [
            "A.	Mĩm cười, gật đầu chào nhẹ.",
            "B.	Ánh mắt nhìn khách hàng thân thiện.",
            "C.	Thái độ nhiệt tình vui vẻ.",
            "D.	Tất cả đều đúng."
        ]
    },
    {
        ID: 18,
        question: "Khách hàng trở ra lối vào mà không mua hàng, khi chạm mắt khách hàng, bảo vệ lối vào:",
        answers: [
            "A.	Cảm ơn khách hàng.",
            "B.	Quan sát nhìn thẳng vào khách xem có lấy cắp hàng siêu thị.",
            "C.	Không quan tâm vì khách không mua hàng.",
            "D.	Không cần phải nói gì."
        ]
    },
    {
        ID: 19,
        question: "Bảo vệ hướng dẫn khách hàng khi được hỏi sử dụng thao tác gì?",
        answers: [
            "A.	Sử dụng cả bàn tay để hướng dẫn khách hàng.",
            "B.	Chỉ bằng một ngón khi hướng dẫn khách hàng.",
            "C.	Dùng lời nói không cần phải sữ dụng tay để hướng dẫn khách.",
            "D.	Cả 3 trường hợp đều được."
        ]
    },
    {
        ID: 20,
        question: "Trường hợp Khách hàng để quên tài sản tại quầy giữ giỏ cuối ngày, khi đến nhận lại thì khách hàng phải liệt kê khớp bao nhiêu % tài sản có trong giỏ thì Bảo vệ giữ giỏ cho Khách hàng nhận lại tài sản?",
        answers: [
            "A.	Đúng trên 75% so với tài sản để quên.",
            "B.	Đúng trên 50% so với tài sản để quên.",
            "C.	Đúng trên 25% so với tài sản để quên.",
            "D.	Đúng 100% so với tài sản để quên."
        ]
    },
    {
        ID: 21,
        question: "Trong các trường hợp xử lý đối tượng vi phạm, trường hợp nào Bảo vệ được chụp hình đối tượng?",
        answers: [
            "A.	Đối tượng vi phạm lần đầu.",
            "B.	Khách hàng đã từng vi phạm tại đơn vị hoặc đối tượng trộm cắp chuyên nghiệp.",
            "C.	Tùy theo người xử lý nếu xét thấy cần thiết thì tiến hành chụp ảnh lưu hồ sơ.",
            "D.	Tất cả các trường hợp vi phạm dù bất kỳ hình thức nào cũng tiến hành chụp hình lưu hồ sơ."
        ]
    },
    {
        ID: 22,
        question: "Bảo vệ khu vực tính tiền phát hiện khách hàng mang 1 túi hàng ra khỏi khu vực quầy tính tiền và đi ngang cổng an ninh thì phát tín hiệu, Bảo vệ sẽ:",
        answers: [
            "A.	Vui vẻ lịch sự tiếp xúc Khách hàng - giải thích và mượn lại túi hàng của khách để kiểm tra.",
            "B.	Có dấu hiệu vi phạm từ phía khách hàng nên phải mời về phòng bảo vệ bàn giao Trưởng ca trực xử lý.",
            "C.	Không quan tâm vì khách hàng đã tính tiền tại khu vực quầy tính tiền của thu ngân.",
            "D.	Mời khách dừng lại và tham khảo thêm ý kiến của bảo vệ vòng trong.",
        ]
    },
    {
        ID: 23,
        question: "Khi khách mang giỏ xách, hành lý đi vào lối vào bảo vệ xử lý như thế nào?",
        answers: [
            "A.	Cho khách mang giỏ xách, hành lý vào.",
            "B.	Chờ khách đi vào lối vào sau đó nhắc khách gửi giỏ xách, hành lý tại quầy giữ giỏ.",
            "C.	Nhắc nhở khách hàng gửi giỏ xách, hành lý trước khi vào lối vào của khu tự chọn và nhắc nhở khách có mang tư trang, tiền bạc và vật dụng quý giá, nếu có niêm phong giỏ xách và cho khách vào khu vực tự chọn.",
            "D.	Cả 2 trường hợp B và C đều được."
        ]
    },
    {
        ID: 24,
        question: "Khi có sự cố cháy siêu thị, nhân viên bảo vệ vòng trong có nhiệm vụ?",
        answers: [
            "A.	Vận hành hệ thống PCCC.",
            "B.	Mở các cửa thoát hiểm và hướng dẫn khách bình tĩnh thoát ra ngoài.",
            "C.	Kiểm tra xem còn khách còn lại trong khu vực bán hàng không .",
            "D.	Câu B và C đúng.",
        ]
    },
    {
        ID: 25,
        question: "Nếu có chuông báo cháy giả bảo vệ xử lý như thế nào?",
        answers: [
            "A.	Đọc loa trấn an khách hàng và mời khách tiếp tục mua sắm.",
            "B.	Nhanh chóng sơ tán khách ra khỏi khu tự chọn siêu thị.",
            "C.	Tỏ ra bình thường vì là báo cháy giả.",
            "D.	Tắt chuông báo cháy."
        ]
    },
];

export default Object.freeze({
    SECURITY_QUESTIONS,
    SALE_QUESTIONS
})