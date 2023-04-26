import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { StyledCard } from "./styles";
import {
  whyChooseUsSectionData,
  featureSectionData,
  testimonialSectionData,
} from "./data";

import {styled} from "@mui/system";

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const SectionBox = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));


const ServiceCard = ({ title, description, image }) => (
  <Grid item xs={12} sm={6} md={4}>
    <StyledCard>
      <CardMedia component="img" height="140" image={image} alt="Placeholder" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </StyledCard>
  </Grid>
);

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const Testimonial = ({ name, quote }) => (
  <Grid item xs={12} sm={4}>
    <Stack spacing={2}>
      <Typography variant="subtitle1">{name}</Typography>
      <Typography>"{quote}"</Typography>
    </Stack>
  </Grid>
);

Testimonial.propTypes = {
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

const FeatureSection = ({ title, items }) => (
  <Box>
    <Typography variant="h4">{title}</Typography>
    <Grid container spacing={3}>
      {items.map((item) => (
        <ServiceCard
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </Grid>
  </Box>
);

FeatureSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const TestimonialSection = ({ title, testimonials }) => (
  <Box>
    <Typography variant="h4">{title}</Typography>
    <Grid container spacing={3}>
      {testimonials.map((testimonial) => (
        <Testimonial
          key={testimonial.id}
          name={testimonial.name}
          quote={testimonial.quote}
        />
      ))}
    </Grid>
  </Box>
);

TestimonialSection.propTypes = {
  title: PropTypes.string.isRequired,
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const WhyChooseUsSection = ({ title, items }) => (
  <SectionBox>
    <SectionTitle variant="h4">{title}</SectionTitle>
    <Grid container spacing={3}>
      {items.map((item) => (
        <Grid item xs={12} sm={6} key={item.id}>
          <Typography variant="h5">{item.title}</Typography>
          <Typography>{item.description}</Typography>
        </Grid>
      ))}
    </Grid>
  </SectionBox>
);

WhyChooseUsSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// const AboutUs = ({
//   featureSectionData,
//   testimonialSectionData,
//   whyChooseUsSectionData,
// }) => (
const AboutUs = () => (
  <SectionBox xs={{height: "100vh"}}>
    <FeatureSection
      title="Featured Services/Courses"
      items={featureSectionData}
    />
    <TestimonialSection
      title="Testimonials"
      testimonials={testimonialSectionData}
    />
    <WhyChooseUsSection title="Why Choose Us?" items={whyChooseUsSectionData} />
    <Box mt={3} mb={3}>
      <Divider />
    </Box>
  </SectionBox>
);

AboutUs.propTypes = {
  featureSectionData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
  // ).isRequired,
  testimonialSectionData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
    })
  ),
  // ).isRequired,
  whyChooseUsSectionData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  // ).isRequired,
};

export default AboutUs;
