"use client";
import { useState } from "react";
import styles from "./page.module.css";
import YellowFigure from "@/assets/decorations/YellowFigure";
import BlueFigure from "@/assets/decorations/BlueFigure";
import GreenFigure from "@/assets/decorations/GreenFigure";
import Image from "next/image";

import Title from "./../components/TItle/Title";
import QustionCard, {
    colorsPickers,
    icons,
} from "@/components/QustionCard/QustionCard";

import Warning from "@/components/Warning/Warning";
import DescriptionCard from "@/components/DescriptionCard/DescriptionCard";
import RecomendationCard from "@/components/RecomendationCard/RecomendationCard";

import ChartModal from "@/modals/ChartModal/ChartModal";
import CardsModal, {
    modalClasses,
    modalImages,
} from "@/modals/CardsModal/CardsModal";

export default function Main() {
    const [isOpenChartModal, setIsOpenChartModal] = useState(false);
    const [isOpenCardsModal, setIsOpenCardsModal] = useState(false);

    const onClickFirstQustionCard = () => {
        setIsOpenChartModal(true);
    };
    const onClickSecondQustionCard = () => {
        setIsOpenCardsModal(true);
    };
    const onCloseFirstQustionCard = () => {
        setIsOpenChartModal(false);
    };
    const onCloseSecondQustionCard = () => {
        setIsOpenCardsModal(false);
    };

    return (
        <main className={styles.main}>
            {isOpenChartModal && (
                <ChartModal
                    onClose={onCloseFirstQustionCard}
                    paragraphs={[
                        <p>
                            В десятилетнем исследовании{" "}
                            <b>«Генетическая эпидемиология ХОБЛ» (COPDGene)</b>
                            среди пациентов с ХОБЛ, диагностированной до 55 лет,
                            было выявлено <b> преобладание женщин (66%)</b>, а в
                            возрасте 60-64 лет количество женщин и мужчин.
                        </p>,
                        <p>
                            Такое эпидемиологическое распределение
                            заболеваемости ХОБЛ может быть связано с тем, что
                            дыхательные пути курящих женщин имеют более
                            <b> высокий процент площади стенок</b>, но меньшую
                            площадь просвета, внутренний диаметр и толщину
                            дыхательных путей по сравнению с курящими мужчинами.
                        </p>,
                    ]}
                />
            )}
            {isOpenCardsModal && (
                <CardsModal
                    paragraphs={[
                        <p>
                            <b>
                                Большинство пациентов с ХОБЛ столкнется с
                                обострениями: как минимум одно среднетяжелое или
                                тяжелое обострение случится в течение 3 лет у
                                77% пациентов1.
                            </b>
                        </p>,
                        <p>
                            В течение 5 лет после первого тяжёлого обострения в
                            живых остаются только 40% пациентов.2 Прогноз после
                            обострений ХОБЛ схож с таковым при сердечной
                            недостаточности, инфаркте миокарда и некоторых
                            злокачественных опухолях.
                        </p>,
                    ]}
                    title="Пятилетняя выживаемость пациентов"
                    onClose={onCloseSecondQustionCard}
                    cards={[
                        {
                            name: modalClasses.heart,
                            title: (
                                <span>
                                    пациентов с{" "}
                                    <b>
                                        {" "}
                                        сердечной недостаточностью<sup>1</sup>
                                    </b>
                                </span>
                            ),
                            image: modalImages.heart,
                            description:
                                "Популяционное когортное исследование (N=385)",
                            precent: "45.5%",
                        },
                        {
                            name: modalClasses.cough,
                            title: (
                                <span>
                                    пациентов с{" "}
                                    <b>
                                        {" "}
                                        инфарктом миокарда<sup>1</sup>
                                    </b>
                                </span>
                            ),
                            image: modalImages.cough,
                            description:
                                "Апостериорный анализ когортного исследования (N=2887)",
                            precent: "55,3%",
                        },
                        {
                            name: modalClasses.bladder,
                            title: (
                                <span>
                                    пациентов <b>с раком мочевого пузыря</b>
                                </span>
                            ),
                            image: modalImages.bladder,
                            description:
                                "Исследование Национальной статистической службы (N=42642)",
                            precent: "50,5%",
                        },
                    ]}
                />
            )}
            <div className={styles.decotations}>
                <BlueFigure className={styles.blue_figure} />
                <GreenFigure className={styles.green_figure} />
                <YellowFigure className={styles.yellow_figure} />
            </div>
            <div className={styles.container}>
                <div className={styles.iner_container}>
                    <Title title="ХОБЛ: мифы и реальность" />
                    <section className={styles.qustionCards}>
                        <QustionCard
                            qustion={
                                <span>
                                    ХОБЛ болеют <b>преимущественно мужчины?</b>
                                </span>
                            }
                            description={
                                "В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание..."
                            }
                            icon={icons.man}
                            pickColor={colorsPickers.blue}
                            onClick={onClickFirstQustionCard}
                        />

                        <QustionCard
                            qustion={
                                <span>
                                    <b>Опасно</b> не наличие заболевания, а
                                    обострения?
                                </span>
                            }
                            description={
                                "Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение..."
                            }
                            icon={icons.arrow}
                            pickColor={colorsPickers.green}
                            onClick={onClickSecondQustionCard}
                        />
                    </section>
                </div>

                <div className={styles.iner_container}>
                    <Title title="ХОБЛ: мифы и реальность" />
                    <Warning
                        text={
                            "Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии"
                        }
                    />
                    <span className={styles.title_directions}>
                        Приоритетные направления фармакотерапевтической
                        стратегии при ХОБЛ<sup>1</sup>:
                    </span>
                    <section className={styles.descriptionCards}>
                        <div className={styles.description_section}>
                            <DescriptionCard
                                count={1}
                                title={
                                    <span>
                                        Ингаляционный <b>антихолинергик</b>
                                    </span>
                                }
                                description={
                                    <span>
                                        Ингибирует бронхоконстрикторные эффекты
                                        ацетилхолина, вступая с ним в
                                        конкурентный антагонизм за
                                        взаимодействие с эффекторными
                                        мускариновыми рецепторами, дополняет и
                                        потенцирует эффект β2-агонистов
                                        <sup>1</sup>
                                    </span>
                                }
                            />
                            <DescriptionCard
                                count={2}
                                title={
                                    <span>
                                        Ингаляционный <b>β2-агонист</b>
                                    </span>
                                }
                                description={
                                    <span>
                                        Вызывает бронходилатацию посредством
                                        релаксации гладкомышечных клеток бронхов
                                        независимо от характера констриктивных
                                        стимулов, т. е. выступают в качестве
                                        функциональных антагонистов
                                        бронхоконстрикции
                                    </span>
                                }
                            />
                            <DescriptionCard
                                count={3}
                                title={
                                    <span>
                                        Ингаляционный <b>глюкокортикостероид</b>{" "}
                                        (ИГКС)
                                    </span>
                                }
                                description={
                                    <span>
                                        Снижает частоту обострений, особенно в
                                        сочетании с ДДБА, подавляют хроническое
                                        воспаление при астме и снижают
                                        гиперреактивность дыхательных путей
                                    </span>
                                }
                            />
                        </div>
                        <div className={styles.arrows}>
                            <Image
                                className={styles.arrow}
                                src={"/images/arrow.svg"}
                                alt="arrow"
                                fill
                            />
                            <Image
                                className={styles.arrow}
                                src={"/images/arrow.svg"}
                                alt="arrow"
                                fill
                            />
                        </div>
                        <div className={styles.recomendation_section}>
                            <RecomendationCard
                                text={
                                    <span>
                                        Пациентам с ХОБЛ рекомендуется
                                        комбинирование бронходилататоров с
                                        разными механизмами действия;Назначение
                                        2-х бронходилататоров из группы
                                        длительнодействующих β2-агонистов (ДДБА)
                                        и длительнодействующих антихолинергиков
                                        (ДДАХ), действие которых дополняет и
                                        усиливает друг друга<sup>1</sup>.
                                    </span>
                                }
                            />
                            <RecomendationCard
                                text={
                                    <span>
                                        Пациентам с ХОБЛ и частыми обострениями
                                        (≥2 среднетяжелых обострений в течение 1
                                        года/1 тяжелое обострение, потребовавшее
                                        госпитализации) рекомендуется назначение
                                        ИГКС в дополнение к ДДБА; Последние
                                        исследования показали, что амбулаторное
                                        применение ИГКС/ДДБА у пациентов с ХОБЛ
                                        снижает госпитальную летальность по
                                        сравнению с пациентами, принимавшими
                                        только ДДБА (8,1% vs 13,2%)<sup>1</sup>.
                                    </span>
                                }
                            />
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
