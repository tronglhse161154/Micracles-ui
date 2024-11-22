import Logo from "../navbar/Logo";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import {
  DeliveryIcon,
  ShieldIcon,
  OperatorIcon,
  ExchangeIcon,
} from "../../common/icons";
import Container from "../../ui/Container";

const Footer = () => {
  return (
    <footer className="bg-body border-t-[1px] mt-56">
      <div className="top-footer bg-primary p-10">
        <Container>
          <div className="relative flex flex-row justify-center gap-20">
            <div className="flex flex-row items-center space-x-3">
              <DeliveryIcon />
              <span>Giao hàng nhanh tại Việt Nam</span>
            </div>

            <div className="flex flex-row items-center space-x-3">
              <ShieldIcon />
              <span>Cam kết chính hãng</span>
            </div>
            <div className="flex flex-row items-center space-x-3">
              <OperatorIcon />
              <span>Hỗ trợ nhiệt tình</span>
            </div>
            <div className="flex flex-row items-center space-x-3">
              <ExchangeIcon />
              <span>Dễ dàng hoàn trả</span>
            </div>
          </div>
        </Container>
      </div>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link to="/" className="mr-5 h-6 sm:h-9">
              <Logo w="120" h="120" />
            </Link>
            <p className="max-w-xs mt-4 text-sm text-black font-semibold">
              Khám phá thế giới thẻ bài quanh bạn.
            </p>
            <div className="flex mt-8 space-x-6 text-gray-600">
              
              <a
                className="hover:opacity-75"
                href="https://www.facebook.com/profile.php?id=61565093288120"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Facebook </span>
                <FaFacebook size="30px" />
              </a>
              <a
                className="hover:opacity-75"
                href="https://www.instagram.com/miracletradingcard/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Instagram </span>
                <FaInstagram size="30px" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-semibold text-black">Về chúng tôi</p>
              <nav aria-label="Footer Navigation - Services" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-black transition hover:opacity-75"
                      to="#"
                    >
                      {" "}
                      Kinh nghiệm
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-black transition hover:opacity-75"
                      to="#"
                    >
                      {" "}
                      Đối tác
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-black transition hover:opacity-75"
                      to="#"
                    >
                      {" "}
                      Bài báo
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <p className="font-semibold text-black">Giao dịch</p>
              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-black transition hover:opacity-75"
                      to="#"
                    >
                      Cách giao dịch
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-black transition hover:opacity-75"
                      to="#"
                    >
                      Chính sách hoàn trả
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-black transition hover:opacity-75"
                      to="#"
                    >
                      Điều kiện mua
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <p className="font-semibold text-black">Bán</p>
              <nav
                aria-label="Footer Navigation - Helpful Links"
                className="mt-6"
              >
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-black transition hover:opacity-75"
                      to="#"
                    >
                      Cách bán
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-black transition hover:opacity-75"
                      to="#"
                    >
                      Mẹo bán
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-black transition hover:opacity-75"
                      to="#"
                    >
                      Chính sách bán
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-black transition hover:opacity-75"
                      to="#"
                    >
                      Affiliates
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <p className="font-semibold text-black">Pháp lý</p>
              <nav aria-label="Footer Navigation - Legal" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-black transition hover:opacity-75"
                      to="#"
                    >
                      Chính sách của chúng tôi
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-black transition hover:opacity-75"
                      to="#"
                    >
                      Trung tâm hỗ trợ
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-black">
          © 2024. Miracle Trading Card Game. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
