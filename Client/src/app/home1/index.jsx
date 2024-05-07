"use client";
import React from "react";
import { Img, Button, Text, Heading, Input } from "../../components";
import Link from "next/link";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

const data = [
  { imageone: "img_image_40x40.png" },
  { imageone: "img_image_3.png" },
  { imageone: "img_image_4.png" },
  { imageone: "img_image_5.png" },
  { imageone: "img_image_6.png" },
];
const data1 = [{ one: "#1" }, { one: "#2" }, { one: "#3" }, { one: "#4" }];

export default function Home1Page() {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}
  return (
    <div className="flex w-full items-start justify-between gap-5 bg-gray-100 md:flex-col">
      <Sidebar
        width="167px !important"
        collapsedWidth="80px !important"
        collapsed={collapsed}
        rootStyles={{ [`.${sidebarClasses.container}`]: { gap: 101 } }}
        className="!sticky top-0 flex h-screen flex-col gap-[101px] overflow-auto bg-indigo-A200 p-[45px] md:hidden md:gap-[75px] md:p-5 sm:gap-[50px]"
      >
        <Img
          src="img_sidebar_logo.svg"
          width={48}
          height={48}
          alt="sidebarlogo"
          className="h-[48px] w-[48px] object-contain"
        />
        <Menu
          menuItemStyles={{
            button: {
              padding: "12px",
              backgroundColor: "#ffffff33",
              borderRadius: "12px",
              [`&:hover, &.ps-active`]: { backgroundColor: "#ffffff !important" },
            },
          }}
          rootStyles={{ ["&>ul"]: { gap: "322px" } }}
          className="mb-[15px] flex w-full flex-col"
        >
          <div className="flex flex-col gap-10">
            <MenuItem
              icon={<Img src="img_home.svg" width={24} height={24} alt="home" className="h-[24px] w-[24px]" />}
            />
            <MenuItem
              icon={<Img src="img_calendar.svg" width={24} height={24} alt="calendar" className="h-[24px] w-[24px]" />}
            />
            <MenuItem
              icon={<Img src="img_lock.svg" width={24} height={24} alt="lock" className="h-[24px] w-[24px]" />}
            />
            <MenuItem
              icon={
                <Img src="img_lock_white_a700.svg" width={24} height={24} alt="lock" className="h-[24px] w-[24px]" />
              }
            />
            <MenuItem
              icon={<Img src="img_search.svg" width={24} height={24} alt="search" className="h-[24px] w-[24px]" />}
            />
          </div>
          <div className="flex flex-col">
            <MenuItem
              icon={
                <Img src="img_arrow_left.svg" width={24} height={24} alt="arrowleft" className="h-[24px] w-[24px]" />
              }
            />
          </div>
        </Menu>
      </Sidebar>
      <div className="flex w-[84%] items-start justify-center gap-[30px] self-end md:w-full md:flex-col md:p-5">
        <div className="mt-10 flex flex-1 flex-col gap-10 md:self-stretch">
          <div className="flex items-center justify-center gap-[13px] rounded-[12px] bg-white-A700 p-3 md:flex-col">
            <Input
              size="sm"
              shape="square"
              name="search"
              placeholder={`Search in social…`}
              prefix={<Img src="img_rewind.svg" width={18} height={18} alt="rewind" className="h-[18px] w-[18px]" />}
              className="flex-grow gap-[15px] md:p-5 sm:pr-5"
            />
            <Heading size="s" as="h1" className="uppercase tracking-[1.00px] !text-gray-500">
              Filters
            </Heading>
          </div>
          <div className="flex items-center gap-[30px] md:flex-col">
            <div className="flex w-full flex-col gap-[30px]">
              <div className="flex flex-col gap-[7px] rounded-[12px] bg-white-A700 p-[30px] sm:p-5">
                <div className="flex items-start gap-[5px]">
                  <Img
                    src="img_avatar.png"
                    width={38}
                    height={38}
                    alt="avatar"
                    className="h-[38px] w-[38px] rounded-[12px] object-cover"
                  />
                  <div className="flex flex-1 justify-center rounded-[19px] bg-white-A700 p-2.5">
                    <Text as="p" className="mb-[52px] !text-gray-500">
                      What are you thinking?{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-5">
                  <div className="flex gap-2.5 self-end">
                    <Button className="w-[28px] rounded-lg">
                      <Img src="img_camera.svg" width={28} height={28} />
                    </Button>
                    <Button className="w-[28px] rounded-lg">
                      <Img src="img_upload.svg" width={28} height={28} />
                    </Button>
                    <Button className="w-[28px] rounded-lg">
                      <Img src="img_plus.svg" width={28} height={28} />
                    </Button>
                  </div>
                  <Button
                    size="xl"
                    rightIcon={
                      <Img
                        src="img_arrowright.svg"
                        width={14}
                        height={14}
                        alt="arrow_right"
                        className="h-[14px] w-[14px]"
                      />
                    }
                    className="min-w-[75px] rounded font-medium"
                  >
                    Share
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center gap-[26px] rounded-[12px] bg-white-A700 p-2">
                <div className="mt-[22px] flex w-[88%] items-center justify-between gap-5 pr-2.5 md:w-full">
                  <div className="flex w-[51%] items-center justify-center gap-2.5">
                    <Img
                      src="img_image.png"
                      width={48}
                      height={48}
                      alt="image"
                      className="h-[48px] w-[48px] rounded-[12px] object-cover"
                    />
                    <div className="flex flex-col items-start gap-1">
                      <Heading as="h2" className="!text-gray-900">
                        Edward Ford
                      </Heading>
                      <Text size="s" as="p" className="!text-gray-500">
                        5min ago
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="img_notification.svg"
                    width={18}
                    height={18}
                    alt="notification"
                    className="h-[18px] w-[18px]"
                  />
                </div>
                <div className="flex w-[88%] flex-col justify-center gap-5 md:w-full">
                  <Text as="p" className="!text-gray-500">
                    Tourism Is Back In Full Swing In Cancun Mexico
                  </Text>
                  <div className="relative h-[180px] md:h-auto">
                    <Img
                      src="img_image_180x320.png"
                      width={320}
                      height={180}
                      alt="image"
                      className="h-[180px] w-full rounded-lg object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full justify-center rounded-lg bg-gray-900_66 px-14 py-[71px] md:p-5">
                      <Button size="3xl" shape="round" className="w-[38px]">
                        <Img src="img_contrast.svg" width={38} height={38} />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex w-[88%] justify-between gap-5 md:w-full">
                  <div className="flex gap-2.5">
                    <div className="flex items-center p-1.5">
                      <Img src="img_favorite.svg" width={14} height={14} alt="favorite" className="h-[14px] w-[14px]" />
                      <Text as="p" className="ml-[5px]">
                        326
                      </Text>
                    </div>
                    <div className="flex items-center gap-1.5 p-[5px]">
                      <Img
                        src="img_instagram.svg"
                        width={14}
                        height={14}
                        alt="instagram"
                        className="h-[14px] w-[14px]"
                      />
                      <Text as="p">148</Text>
                    </div>
                  </div>
                  <div className="flex items-center p-1.5">
                    <Text as="p">Share</Text>
                    <Img src="img_question.svg" width={14} height={14} alt="question" className="h-[14px] w-[14px]" />
                  </div>
                </div>
                <div className="flex w-[88%] items-center justify-center gap-[15px] rounded border-2 border-solid border-gray-500_33 p-[11px] md:w-full">
                  <Input
                    size="xs"
                    shape="square"
                    name="comment"
                    placeholder={`Write a comment…`}
                    suffix={
                      <Img src="img_settings.svg" width={14} height={14} alt="settings" className="h-[14px] w-[14px]" />
                    }
                    className="flex-grow gap-3"
                  />
                  <Img src="img_save.svg" width={14} height={14} alt="save" className="h-[14px] w-[14px]" />
                </div>
                <div className="flex w-[88%] flex-col gap-2.5 md:w-full">
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex items-center gap-[5px]">
                      <Img
                        src="img_avatar_28x28.png"
                        width={28}
                        height={28}
                        alt="avatar"
                        className="h-[28px] w-[28px] rounded-lg object-cover"
                      />
                      <Text as="p" className="self-end">
                        Billy Green
                      </Text>
                    </div>
                    <Text size="s" as="p" className="mb-[5px] self-end !text-gray-500">
                      20min ago
                    </Text>
                  </div>
                  <div>
                    <div className="flex flex-col gap-2.5">
                      <Text as="p" className="!font-normal leading-[22px] !text-gray-500">
                        Awesome Edward, remeber that five tips for low cost holidays I sent you?
                      </Text>
                      <div className="flex gap-[15px]">
                        <Img
                          src="img_favorite_red_a200.svg"
                          width={14}
                          height={14}
                          alt="favorite"
                          className="h-[14px] w-[14px]"
                        />
                        <Img
                          src="img_instagram.svg"
                          width={14}
                          height={14}
                          alt="instagram"
                          className="h-[14px] w-[14px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-[88%] flex-col gap-[33px] md:w-full">
                  <div className="flex flex-col gap-[13px]">
                    <div className="flex items-center justify-between gap-5">
                      <div className="flex items-center gap-[5px]">
                        <Img
                          src="img_avatar_28x28.png"
                          width={28}
                          height={28}
                          alt="avatar"
                          className="h-[28px] w-[28px] rounded-lg object-cover"
                        />
                        <Text as="p" className="self-end">
                          Billy Green
                        </Text>
                      </div>
                      <Text size="s" as="p" className="mb-[5px] self-end !text-gray-500">
                        20min ago
                      </Text>
                    </div>
                    <Text as="p" className="!font-normal !text-gray-500">
                      Awesome Edward, remeber that five tips for low cost holidays I sent you?
                    </Text>
                  </div>
                  <div className="flex gap-[15px]">
                    <Img
                      src="img_favorite_red_a200.svg"
                      width={14}
                      height={14}
                      alt="favorite"
                      className="h-[14px] w-[14px]"
                    />
                    <Img src="img_instagram.svg" width={14} height={14} alt="instagram" className="h-[14px] w-[14px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-[30px]">
              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                <div className="flex flex-col gap-[30px] rounded-[12px] bg-white-A700 p-[30px] sm:p-5">
                  <div className="flex items-center justify-between gap-5 pr-2.5">
                    <div className="flex w-[68%] items-center justify-center gap-2.5">
                      <Img
                        src="img_image_48x48.png"
                        width={48}
                        height={48}
                        alt="image"
                        className="h-[48px] w-[48px] rounded-[12px] object-cover"
                      />
                      <div className="flex flex-col items-start gap-[5px]">
                        <Heading as="h3" className="!text-gray-900">
                          Katherine Cole
                        </Heading>
                        <Text size="s" as="p" className="!text-gray-500">
                          5min ago
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="img_notification.svg"
                      width={18}
                      height={18}
                      alt="notification"
                      className="h-[18px] w-[18px]"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col items-start justify-center">
                      <Img
                        src="img_image_150x290.png"
                        width={290}
                        height={150}
                        alt="image"
                        className="h-[150px] w-full rounded-lg object-cover md:h-auto"
                      />
                      <div className="mt-5 flex flex-col gap-[15px] self-stretch">
                        <Heading size="lg" as="h4" className="leading-[22px] !text-gray-900">
                          The Best Fashion Instagrams of the Week: Céline Dion, Lizzo, and More
                        </Heading>
                        <Text as="p" className="leading-5 !text-gray-500">
                          If you are looking for a break from the cold, take a cue from Lizzo: This week, the singer
                          headed to Disneyland in warm and sunny California.
                        </Text>
                      </div>
                      <Link href="#" className="mt-[11px]">
                        <Heading size="s" as="h5" className="uppercase tracking-[1.00px] !text-indigo-A200">
                          Read More
                        </Heading>
                      </Link>
                    </div>
                    <div className="flex justify-between gap-5">
                      <div className="flex items-center gap-[15px]">
                        <div className="flex items-center p-1.5">
                          <Img
                            src="img_favorite.svg"
                            width={14}
                            height={14}
                            alt="favorite"
                            className="h-[14px] w-[14px]"
                          />
                          <Text as="p" className="ml-[5px]">
                            326
                          </Text>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Img
                            src="img_instagram.svg"
                            width={14}
                            height={14}
                            alt="instagram"
                            className="h-[14px] w-[14px]"
                          />
                          <Text as="p">148</Text>
                        </div>
                      </div>
                      <div className="flex items-center p-1.5">
                        <Text as="p">Share</Text>
                        <Img
                          src="img_question.svg"
                          width={14}
                          height={14}
                          alt="question"
                          className="h-[14px] w-[14px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <div className="flex flex-col items-center justify-center gap-[30px] rounded-[12px] bg-white-A700 p-[23px] sm:p-5">
                <div className="mt-[7px] flex flex-col gap-[31px] self-stretch">
                  <div className="flex items-center justify-between gap-5 pr-2.5">
                    <div className="flex items-center gap-2.5">
                      <Img
                        src="img_image_1.png"
                        width={48}
                        height={48}
                        alt="image"
                        className="h-[48px] w-[48px] rounded-[12px] object-cover"
                      />
                      <div className="flex flex-col items-start gap-[5px]">
                        <Heading as="h6" className="!text-gray-900">
                          Dustin Houston
                        </Heading>
                        <Text size="s" as="p" className="!text-gray-500">
                          5min ago
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="img_notification.svg"
                      width={18}
                      height={18}
                      alt="notification"
                      className="h-[18px] w-[18px]"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-[26px]">
                    <Text as="p" className="ml-[7px] !text-gray-500 md:ml-0">
                      Whether its a driving tour 😂
                    </Text>
                    <div className="self-stretch">
                      <div className="flex gap-2.5">
                        <Img
                          src="img_image_160x200.png"
                          width={200}
                          height={160}
                          alt="image_eleven"
                          className="h-[160px] w-[71%] rounded-lg object-cover"
                        />
                        <div className="flex w-[29%] flex-col gap-2.5">
                          <Img
                            src="img_image_75x80.png"
                            width={80}
                            height={75}
                            alt="image_thirteen"
                            className="h-[75px] rounded-lg object-cover"
                          />
                          <div className="relative h-[75px] md:h-auto">
                            <Img
                              src="img_image_2.png"
                              width={80}
                              height={75}
                              alt="image_fifteen"
                              className="h-[75px] w-full rounded-lg object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max items-center gap-1.5 p-1.5">
                              <Img
                                src="img_camera_white_a700.svg"
                                width={14}
                                height={14}
                                alt="camera"
                                className="h-[14px] w-[14px]"
                              />
                              <Text as="p" className="!font-sfprodisplay !text-white-A700">
                                17
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3 flex w-[90%] justify-between gap-5 md:w-full">
                  <div className="flex flex-wrap items-center">
                    <Img src="img_favorite.svg" width={14} height={14} alt="favorite" className="h-[14px] w-[14px]" />
                    <Text as="p" className="ml-[5px]">
                      326
                    </Text>
                    <Img
                      src="img_instagram.svg"
                      width={14}
                      height={14}
                      alt="instagram"
                      className="ml-[27px] h-[14px] w-[14px]"
                    />
                    <Text as="p" className="ml-1.5">
                      148
                    </Text>
                  </div>
                  <div className="flex items-center">
                    <Text as="p">Share</Text>
                    <Img src="img_question.svg" width={14} height={14} alt="question" className="h-[14px] w-[14px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[36%] items-center justify-center gap-2.5 overflow-auto pl-[5px] md:w-full sm:flex-col">
          <Img
            src="img_indicator_gray_500.svg"
            width={5}
            height={128}
            alt="indicator"
            className="h-[128px] w-[5px] rounded-sm sm:w-full"
          />
          <div className="flex w-full items-start justify-center sm:w-full">
            <div className="flex flex-1 flex-col items-center gap-[46px] rounded-bl-[32px] rounded-tl-[32px] bg-gray-900 p-[30px] sm:p-5">
              <div className="mr-2.5 mt-[15px] flex gap-5 self-end md:mr-0">
                <Button size="6xl" shape="round" className="min-w-[48px] font-sfprodisplay font-bold">
                  1
                </Button>
                <Img
                  src="img_avatar_48x48.png"
                  width={48}
                  height={48}
                  alt="avatar"
                  className="h-[48px] w-[48px] rounded-[12px] object-cover"
                />
              </div>
              <div className="flex flex-col gap-[60px] self-stretch sm:gap-[30px]">
                <div className="flex flex-col items-start gap-[41px]">
                  <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                    <Heading size="xl" as="h2">
                      Featured Stories
                    </Heading>
                  </a>
                  <div className="flex gap-5 self-stretch md:flex-row">
                    {data.map((d, index) => (
                      <div
                        key={"list" + index}
                        className="blue_A700_light_blue_200_border flex flex-col items-center justify-center rounded-[12px] border-2 border-solid"
                      >
                        <Img
                          src={d.imageone}
                          width={40}
                          height={40}
                          alt="image"
                          className="h-[40px] w-[40px] rounded-[9px] object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center gap-[41px]">
                  <Heading size="xl" as="h3">
                    Who to Follow
                  </Heading>
                  <div className="flex flex-col gap-[30px] self-stretch">
                    <div className="flex flex-1 items-center justify-between gap-5">
                      <div className="flex items-center gap-2.5">
                        <Img
                          src="img_avatar.png"
                          width={38}
                          height={38}
                          alt="cammy_hedling"
                          className="h-[38px] w-[38px] rounded-[12px] object-cover"
                        />
                        <div className="flex flex-col items-start gap-[3px]">
                          <Heading as="h4">Cammy Hedling</Heading>
                          <Text size="s" as="p" className="!text-white-A700">
                            Los Angeles, CA
                          </Text>
                        </div>
                      </div>
                      <Button className="w-[28px] self-end rounded-lg">
                        <Img src="img_settings_white_a700.svg" width={28} height={28} />
                      </Button>
                    </div>
                    <div className="flex flex-1 items-center justify-between gap-5">
                      <div className="flex items-center gap-2.5">
                        <Img
                          src="img_avatar_38x38.png"
                          width={38}
                          height={38}
                          alt="avatar"
                          className="h-[38px] w-[38px] rounded-[12px] object-cover"
                        />
                        <div className="flex flex-col items-start gap-[3px]">
                          <Heading as="h5">Cammy Hedling</Heading>
                          <Text size="s" as="p" className="!text-white-A700">
                            Los Angeles, CA
                          </Text>
                        </div>
                      </div>
                      <Button className="w-[28px] self-end rounded-lg">
                        <Img src="img_settings_white_a700.svg" width={28} height={28} />
                      </Button>
                    </div>
                    <div className="flex flex-1 items-center">
                      <Img
                        src="img_avatar_1.png"
                        width={38}
                        height={38}
                        alt="avatar"
                        className="h-[38px] w-[38px] rounded-[12px] object-cover"
                      />
                      <div className="ml-2.5 flex flex-col items-start gap-[3px]">
                        <Heading as="h6">Cammy Hedling</Heading>
                        <Text size="s" as="p" className="!text-white-A700">
                          Los Angeles, CA
                        </Text>
                      </div>
                      <Button className="ml-[30px] w-[28px] self-end rounded-lg">
                        <Img src="img_settings_white_a700.svg" width={28} height={28} />
                      </Button>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    shape="square"
                    rightIcon={
                      <Img
                        src="img_arrowright_gray_500.svg"
                        width={18}
                        height={18}
                        alt="arrow_right"
                        className="h-[18px] w-[18px]"
                      />
                    }
                    className="min-w-[90px] gap-1 font-bold uppercase tracking-[1.00px] text-gray-500"
                  >
                    See more
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-center gap-[39px]">
                  <Heading size="xl" as="h5">
                    Trend Topics
                  </Heading>
                  <div className="flex flex-col gap-[30px] self-stretch">
                    {data1.map((d, index) => (
                      <div key={"listusername" + index} className="flex flex-1 items-center justify-between gap-5">
                        <div className="flex items-center gap-2.5">
                          <Button size="2xl" shape="round" className="min-w-[38px] font-sfprodisplay font-bold">
                            {d.one}
                          </Button>
                          <Text as="p" className="!text-white-A700">
                            MadeInAmerica
                          </Text>
                        </div>
                        <Button className="w-[28px] rounded-lg">
                          <Img src="img_checkmark_white_a700.svg" width={28} height={28} />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative ml-[-15px] mt-52 flex flex-col">
              <div className="blue_A700_light_blue_200_border flex flex-col items-center justify-center rounded-[12px] border-2 border-solid">
                <Img
                  src="img_image_7.png"
                  width={40}
                  height={40}
                  alt="imageteen"
                  className="h-[40px] w-[40px] rounded-[9px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
